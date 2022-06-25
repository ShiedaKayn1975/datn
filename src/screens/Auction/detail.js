import React, { useState, useEffect } from 'react'
import {
  useTheme, Grid, Typography, Stack, Chip, TextField, Avatar, Button, List, ListItem,
  Divider, ListItemAvatar, ListItemText, Pagination
} from '@mui/material'
import { useParams } from 'react-router-dom'
import AuctionProductResource from '../../resources/AuctionProductResource'
import ProductResource from '../../resources/Product'
import { toast } from 'react-toastify'
import { FormModal } from '../../components/Modal'
import PaperItem from '../../components/Paper/PaperItem'
import moment from 'moment'
import { statusLabelMapper, formatterCurrentcy } from '../../utils'
import { MainCard } from '../../components/Card'
import User1 from '../../assets/images/users/jinx.jpeg'
import { peckPortalClient } from '../../Api'
import config from 'config'

const AuctionDetail = (props) => {
  const theme = useTheme()
  const params = useParams()
  const [auction, setAuction] = useState(null)
  const [countDown, setCountDown] = useState(null)
  const [comment, setComment] = useState(null)
  const [comments, setComments] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    const id = params.id
    getAuction(id)
  }, [])

  useEffect(() => {
    if (auction) {
      getComments()
    }
  }, [auction, page])

  const getAuction = (id) => {
    AuctionProductResource.loader.fetchItem({
      id: id,
      relatives: {
        product: {
          loader: ProductResource.loader,
          resource: 'products',
          foreignKey: 'product_id',
          params: {
            'fields[products]': 'id,name,images'
          }
        }
      },
      done: (response) => {
        console.log(response)
        setAuction(response)
      },
      error: (err) => {
        toast.error("Fetch auction error")
      }
    })
  }

  const onSubmitComment = () => {
    AuctionProductResource.loader.commitAction({
      id: auction.id,
      data: {
        action_code: 'comment_auction',
        action_data: { type: 'comment', content: comment }
      },
      done: (response) => {
        toast.success("Success")
        setComment(null)
        getComments()
      }
    })
  }

  const getComments = () => {
    peckPortalClient.get(`${config.peckPortalApi}/api/v1/auction_products/${auction.id}/get_comments_history`, {
      params: {
        perPage: 10, page: page
      }
    }).then(response => {
      setComments(response.data.data)
      setPageCount(Math.ceil(response.data.count / response.data.perPage))
      console.log(Math.round(response.data.count / response.data.perPage))
    })
  }

  if (auction) {
    setInterval(function () {
      let start_at = new Date().getTime();
      let finish_at = new Date(auction.finish_at).getTime();
      const distance = finish_at - start_at;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

      if (distance < 0) {
        clearInterval(x);
        setCountDown("EXPIRED")
      }
    }, 1000);
  }

  const handleChangePage = (event, page) => {
    setPage(page)
  }

  return (
    <div>
      {
        auction ?
          <PaperItem
            {...theme.typography.body2}
            color={theme.palette.text.secondary}
            borderRadius={3}
          >
            <Grid container
              sx={{
                marginBottom: 2
              }}
            >
              <Grid item xs={8}>
                <Stack>
                  <Stack spacing={1} direction='row'>
                    <Typography variant='h4'
                      sx={{
                        float: 'left',
                        marginLeft: 3,
                        marginTop: 2
                      }}
                    >
                      {auction?.title}
                    </Typography>
                    <Chip sx={{ backgroundColor: statusLabelMapper[auction.status], '&.MuiChip-root': { marginTop: 2 } }} label={auction.status} size='small' />
                  </Stack>
                  {
                    auction &&
                    <Typography variant='span'
                      sx={{
                        float: 'left',
                        marginLeft: 3,
                      }}
                    >
                      {moment(auction.created_at).format('lll')}
                    </Typography>
                  }
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Typography variant='span'
                  sx={{
                    float: 'right',
                    marginTop: 2,
                    marginRight: 2,
                    color: 'red'
                  }}
                >
                  {countDown && <b>Finish after: {countDown}</b>}
                </Typography>
              </Grid>
            </Grid>
            <div style={{ marginLeft: 24, marginRight: 24, paddingBottom: 20 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <MainCard>
                        <Stack spacing={1}>
                          <Typography>Initial Price: {formatterCurrentcy.format(auction.price)}</Typography>
                          <Typography>Current Highest Price:</Typography>
                          <Typography>Current winner:</Typography>
                        </Stack>
                      </MainCard>
                    </Grid>
                    <Grid item xs={12}>
                      <MainCard title={'Comments'}>
                        <Grid container spacing={1}>
                          <Grid item xs={1}>
                            <Stack>
                              <Avatar src={User1} />
                            </Stack>
                          </Grid>
                          <Grid item xs={11}>
                            <Grid container spacing={1}>
                              <Grid item xs={12}>
                                <TextField
                                  multiline
                                  rows={2}
                                  maxRows={3}
                                  fullWidth
                                  placeholder='Leave your comment here'
                                  value={comment || ''}
                                  onChange={(event) => {
                                    setComment(event.target.value)
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Button variant='contained'
                                  onClick={onSubmitComment}
                                  sx={{ float: 'right' }}
                                >
                                  Submit
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <List sx={{ width: '100%' }}>
                          {
                            comments.map((item, index) => (
                              <div key={index}>
                                <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }}>
                                  <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={User1} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={item.actor_email}
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: 'inline' }}
                                          component="span"
                                          variant="body2"
                                          color="text.primary"
                                        >
                                          {moment(item.created_at).format('lll')}
                                        </Typography>
                                        <div>{
                                          item.action_data.type == 'comment' &&
                                          <>Comment: {item.action_data.content}</>
                                        }</div>
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                              </div>
                            ))
                          }
                        </List>
                        {
                          !!pageCount &&
                          <Pagination
                            count={pageCount}
                            page={page}
                            onChange={handleChangePage}
                          />
                        }
                      </MainCard>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <MainCard>

                  </MainCard>
                </Grid>
              </Grid>
            </div>
          </PaperItem>
          :
          <>Loading</>
      }
    </div>
  )
}

export default AuctionDetail