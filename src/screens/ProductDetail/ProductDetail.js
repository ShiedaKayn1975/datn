import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProductResource from '../../resources/Product'
import PaperItem from '../../components/Paper/PaperItem'
import {
  Stack, useTheme, Grid, Typography, Paper, Table, TableContainer, TableBody, TableRow,
  TableCell, Chip, Tab, Tabs, Box, TableHead, Button, IconButton
} from '@mui/material'
import { MainCard } from '../../components/Card'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import moment from 'moment'
import { styled } from '@mui/material/styles';
import { IconId, IconPlus } from '@tabler/icons'
import ToolBarAction from '../../components/ToolBarAction'
import FormModal from '../../components/Modal/FormModal'
import { NewCampaignForm } from '../../components/Form'
import { ActionableExceptionHandler } from '../../utils'
import AuctionProductResource from '../../resources/AuctionProductResource'
import { statusLabelMapper } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CustomTab = styled(Tab)(({ theme }) => ({
  minHeight: 50,
  color: theme.palette.primary.dark,
  fontWeight: 500
}))

const schema = {
  title: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  price: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  start_at: {
    presence: { allowEmpty: false, message: '^Required' },
  }
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProductDetail = (props) => {
  const theme = useTheme()
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [images, setImages] = useState([])
  const [currentTab, setCurrentTab] = useState(0)
  const [auctions, setAuctions] = useState([])
  const currentApp = useSelector(selector => selector.currentApp)

  const navigate = useNavigate()

  useEffect(() => {
    const id = params.id
    getProduct(id)
  }, [])

  const getAuction = () => {
    AuctionProductResource.loader.fetchItems({
      paging: { page: 0, perPage: 10 },
      filters: {
        product_id: product.id
      },
      done: (response) => {
        setAuctions(response)
      }
    })
  }

  useEffect(() => {
    if (product) {
      getAuction()
    }
  }, [product])

  const getProduct = (id) => {
    ProductResource.loader.fetchItem({
      id: id,
      done: (response) => {
        setProduct(response)
        if (response.images) {
          let imgs = response.images.map(i => {
            return {
              original: i,
              thumbnail: i,
              originalHeight: 300,
              thumbnailHeight: 60
            }
          })
          setImages(imgs)
        }
      },
      error: (error) => {
        toast.error("Fetch product error")
      }
    })
  }

  const handleChangeCurrentTab = (event, value) => {
    setCurrentTab(value)
  }

  const newCampaign = () => {
    FormModal.show({
      title: 'New Auction',
      submitData: {
        id: product.id
      },
      schema: schema,
      renderComponent: ({ submitData, handleChange }) => <NewCampaignForm
        submitData={submitData}
        handleChange={handleChange}
      />,
      action: {
        title: "Create",
        onSubmit: (submitData, handleChange, ctx) => {
          return new Promise((resolve, reject) => {
            const id = submitData.values.id
            const data = { ...submitData.values }
            delete data.id

            ProductResource.loader.commitAction({
              id: id,
              data: {
                action_code: 'new_campaign',
                action_data: data
              },
              done: (response) => {
                resolve(response)
                getAuction()
                toast.success("Success")
              },
              error: (error) => {
                reject(error)
                toast.error(ActionableExceptionHandler(error).message)
              }
            })
          })
        }
      }
    })
  }

  const cancelAuction = (auction) => {
    const action_data = {
      auction_id: auction.id
    }

    FormModal.show({
      title: 'Cancel Auction',
      submitData: {},
      renderComponent: ({ submitData, handleChange }) => <div>Are you sure?</div>
      ,
      action: {
        title: "OK",
        onSubmit: (submitData, handleChange, ctx) => {
          return new Promise((resolve, reject) => {
            ProductResource.loader.commitAction({
              id: product.id,
              data: {
                action_code: 'cancel_auction',
                action_data: action_data
              },
              done: (response) => {
                getAuction()
                toast.success("Success")
                resolve(true)
              },
              error: (error) => {
                toast.error(ActionableExceptionHandler(error).message)
                reject(true)
              }
            })
          })
        }
      }
    })
  }

  const deleteAuction = (auction) => {
    const action_data = {
      auction_id: auction.id
    }

    ProductResource.loader.commitAction({
      id: product.id,
      data: {
        action_code: 'delete_auction',
        action_data: action_data
      },
      done: (response) => {
        getAuction()
        toast.success("Success")
      },
      error: (error) => {
        toast.error(ActionableExceptionHandler(error).message)
      }
    })
  }

  return (
    <>
      <FormModal />
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
              <Typography variant='h4'
                sx={{
                  float: 'left',
                  marginLeft: 3,
                  marginTop: 2
                }}
              >
                {product?.name}
              </Typography>
              {
                product &&
                <Typography variant='span'
                  sx={{
                    float: 'left',
                    marginLeft: 3,
                  }}
                >
                  {moment(product.created_at).format('lll')}
                </Typography>
              }
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                marginTop: 10,
                marginRight: 20
              }}
            >
              {
                product &&
                <>
                  {
                    currentApp == 'seller' ?
                      <ToolBarAction
                        rightActions={[
                          {
                            text: 'New Auction',
                            color: 'primary',
                            visible: true,
                            action: () => {
                              newCampaign()
                            },
                          }
                        ]}
                      />
                      :
                      <></>
                  }
                </>
              }
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <MainCard
              sx={{
                marginLeft: 2,
                marginBottom: 2,
                maxHeight: 650
              }}
            >
              <ImageGallery items={images} />
            </MainCard>
          </Grid>
          <Grid item xs={7}>
            {
              product &&
              <Grid container>
                <Grid item xs={12}>
                  <MainCard
                    sx={{
                      marginRight: 2,
                      marginBottom: 2,
                      maxHeight: 250
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                          <TableRow
                            key={'name'}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <span style={{ fontWeight: 'bold' }}>Name:</span>
                            </TableCell>
                            <TableCell align="center" sx={{ paddingTop: 1, paddingBottom: 1 }}>{product.name}</TableCell>
                          </TableRow>
                          <TableRow
                            key={'categories'}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <span style={{ fontWeight: 'bold' }}>Categories:</span>
                            </TableCell>
                            <TableCell align="center" component="th" scope="row"
                              sx={{ paddingTop: 1, paddingBottom: 1 }}
                            >
                              {
                                product.categories &&
                                product.categories.map((category, index) => <Chip key={index} label={category.name} sx={{ marginRight: 1 }} />)
                              }
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </MainCard>
                </Grid>
                <Grid item xs={12}>
                  <MainCard
                    sx={{
                      marginRight: 2,
                      marginBottom: 2,
                      maxHeight: 250,
                      overflow: 'auto'
                    }}
                    customHeader={<Typography variant='h4' sx={{ padding: 2 }}>Auctions of product</Typography>}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
                        <TableHead>
                          <TableCell align='center'><b>Title</b></TableCell>
                          <TableCell align='center'><b>Price</b></TableCell>
                          <TableCell align='center'><b>Status</b></TableCell>
                          <TableCell align='center'><b>Created at</b></TableCell>
                          {
                            currentApp == 'seller' &&
                            <TableCell align='center'><b>Actions</b></TableCell>
                          }
                        </TableHead>
                        <TableBody>
                          {auctions.map((auction, index) => (
                            <TableRow
                              hover
                              key={index}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                              onClick={() => navigate(`/auctions/${auction.id}`)}
                            >
                              <TableCell align='center'>{auction.title}</TableCell>
                              <TableCell align='center'>${auction.price}</TableCell>
                              <TableCell align='center'>
                                <Chip sx={{ backgroundColor: statusLabelMapper[auction.status] }} label={auction.status} size='small' />
                              </TableCell>
                              <TableCell align='center'>{moment(auction.created_at).format('lll')}</TableCell>
                              {
                                currentApp == 'seller' &&
                                <TableCell align='center'>
                                  {
                                    auction.status == 'waiting' &&
                                    <Button variant='contained'
                                      color='error'
                                      onClick={() => cancelAuction(auction)}
                                      size='small'
                                    >Cancel</Button>
                                  }
                                </TableCell>
                              }
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </MainCard>
                </Grid>
              </Grid>
            }
          </Grid>
        </Grid>
        <MainCard
          sx={{
            borderRadius: 2,
            marginLeft: 2,
            marginRight: 2,
            marginBottom: 2,
            minHeight: '20vh'
          }}
        >
          <Box sx={{ borderBottom: '1px solid', borderColor: theme.palette.grey[300] }}>
            <Tabs
              value={currentTab}
              onChange={handleChangeCurrentTab}
              aria-label="icon position tabs"
              indicatorColor='primary'
              textColor='primary'
              variant="scrollable"
            >
              <CustomTab icon={<IconId />} iconPosition="start" label="Description" />
            </Tabs>
          </Box>
          <TabPanel value={currentTab} index={0}>
            {
              product &&
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            }
          </TabPanel>
        </MainCard>
      </PaperItem>
    </>
  )
}

export default ProductDetail