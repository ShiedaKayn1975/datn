import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProductResource from '../../resources/Product'
import PaperItem from '../../components/Paper/PaperItem'
import {
  Stack, useTheme, Grid, Typography, Paper, Table, TableContainer, TableBody, TableRow,
  TableCell, Chip, Tab, Tabs, Box
} from '@mui/material'
import { MainCard } from '../../components/Card'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import moment from 'moment'
import { styled } from '@mui/material/styles';
import { IconId, IconPlus } from '@tabler/icons'
import ToolBarAction from '../../components/ToolBarAction'

const CustomTab = styled(Tab)(({ theme }) => ({
  minHeight: 50,
  color: theme.palette.primary.dark,
  fontWeight: 500
}))

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

  useEffect(() => {
    const id = params.id
    getProduct(id)
  }, [])

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

  return (
    <>
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
              <ToolBarAction
                rightActions={[
                  {
                    text: 'New Campaign',
                    color: 'primary',
                    visible: true,
                    action: () => {

                    },
                  }
                ]}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <MainCard
              sx={{
                marginLeft: 2,
                marginBottom: 2
              }}
            >
              <ImageGallery items={images} />
            </MainCard>
          </Grid>
          <Grid item xs={7}>
            {
              product &&
              <MainCard
                sx={{
                  marginRight: 2,
                  marginBottom: 2
                }}
              >
                {
                  product &&
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
                          <TableCell align="center">{product.name}</TableCell>
                        </TableRow>
                        <TableRow
                          key={'price'}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <span style={{ fontWeight: 'bold' }}>Price:</span>
                          </TableCell>
                          <TableCell align="center">{product.price}</TableCell>
                        </TableRow>
                        <TableRow
                          key={'categories'}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <span style={{ fontWeight: 'bold' }}>Categories:</span>
                          </TableCell>
                          <TableCell align="center">
                            {
                              product.categories &&
                              product.categories.map((category, index) => <Chip key={index} label={category.name} sx={{ marginRight: 1 }} />)
                            }
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                }
              </MainCard>
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