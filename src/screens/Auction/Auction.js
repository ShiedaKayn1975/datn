import React, { useEffect, useState } from 'react'
import PaperItem from '../../components/Paper/PaperItem'
import { MainCard } from '../../components/Card'
import {
  useTheme, Grid, Typography, Button, TableContainer, Paper, TableCell, Table, TableRow,
  TableBody, TableHead, Pagination, Chip
} from '@mui/material'
import AuctionProductResource from '../../resources/AuctionProductResource'
import moment from 'moment'
import ProductResource from '../../resources/Product'
import { statusLabelMapper } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Auction = (props) => {
  const theme = useTheme()
  const [auctions, setAuctions] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    getAuctions()
  }, [currentPage])

  const getAuctions = () => {
    AuctionProductResource.loader.fetchItems({
      paging: { perPage: 20, page: currentPage },
      relatives: {
        product: {
          loader: ProductResource.loader,
          resource: 'products',
          foreignKey: 'product_id',
          params: {
            'fields[products]': 'id,name'
          }
        }
      },
      done: (response, meta) => {
        setAuctions(response)
        setPageCount(meta['Page Count'])
      },
      error: (error) => {

      }
    })
  }

  const handleChangePage = (event, page) => {
    setCurrentPage(page)
  }

  const detailAuction = (item) => {
    navigate(`/auctions/${item.id}`)
  }

  return (
    <>
      <PaperItem
        {...theme.typography.body2}
        color={theme.palette.text.secondary}
        lineHeight={'60px'}
        borderRadius={3}
        sx={{ paddingBottom: 2 }}
      >
        <Grid container
          sx={{
            marginBottom: 2
          }}
        >
          <Grid item xs={6}>
            <Typography variant='h4'
              sx={{
                float: 'left',
                marginLeft: 3,
                marginTop: 2
              }}
            >
              Auctions
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {/* <Button variant='contained'
              // onClick={newProduct}
              sx={{
                float: 'right',
                marginRight: 3,
                marginTop: 1
              }}
            >New auction</Button> */}
          </Grid>
        </Grid>
        <MainCard
          sx={{
            borderRadius: 3,
            minHeight: '10vh',
            marginLeft: 2,
            marginRight: 2,
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableCell width={'17%'}><Typography variant='h5' fontWeight={'bold'}>Title</Typography></TableCell>
                <TableCell width={'10%'}><Typography variant='h5' fontWeight={'bold'}>Product</Typography></TableCell>
                <TableCell width={'7%'}><Typography variant='h5' fontWeight={'bold'}>Status</Typography></TableCell>
                <TableCell width={'4%'}><Typography variant='h5' fontWeight={'bold'}>Price</Typography></TableCell>
                <TableCell width={'16%'}><Typography variant='h5' fontWeight={'bold'}>Created at</Typography></TableCell>
                <TableCell width={'16%'}><Typography variant='h5' fontWeight={'bold'}>Start at</Typography></TableCell>
                <TableCell width={'16%'}><Typography variant='h5' fontWeight={'bold'}>Finish at</Typography></TableCell>
                <TableCell width={'4%'}><Typography variant='h5' fontWeight={'bold'}>Cost</Typography></TableCell>
                <TableCell width={'10%'}><Typography variant='h5' fontWeight={'bold'}>Winner</Typography></TableCell>
              </TableHead>
              <TableBody>
                {
                  auctions.map((item, index) => {
                    return <TableRow key={index} hover sx={{ cursor: 'pointer' }}
                      onClick={() => detailAuction(item)}
                    >
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.product?.name}</TableCell>
                      <TableCell>
                        <Chip sx={{ backgroundColor: statusLabelMapper[item.status] }} label={item.status} size='small' />
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.created_at && moment(item.created_at).format('lll')}</TableCell>
                      <TableCell>{item.start_at && moment(item.start_at).format('lll')}</TableCell>
                      <TableCell>{item.finish_at && moment(item.end_at).format('lll')}</TableCell>
                      <TableCell>{item.cost}</TableCell>
                      <TableCell>{item.winner}</TableCell>
                    </TableRow>
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>
        {
          !!pageCount &&
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChangePage}
          />
        }
      </PaperItem>
    </>
  )
}

export default Auction