import React, { useEffect, useState } from 'react'
import PaperItem from '../../components/Paper/PaperItem'
import {
  Grid, Typography, Stack, Button, ImageListItem, ImageListItemBar, IconButton,
  Pagination
} from '@mui/material'
import { useTheme } from '@mui/material'
import { MainCard } from '../../components/Card'
import FormModal from '../../components/Modal/FormModal'
import ProductForm from './ProductForm'
import ProductResource from '../../resources/Product'
import { toast } from 'react-toastify'
import UserResource from '../../resources/User'
import moment from 'moment'
import { useNavigate } from "react-router-dom";

const schema = {
  name: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  categories: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  quality_commitment: {
    presence: { allowEmpty: false, message: '^Required' },
  }
}

const Product = (props) => {
  const theme = useTheme()
  const [products, setProducts] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const XS_GRID = 3
  const navigate = useNavigate()

  useEffect(() => {
    loadItems()
  }, [currentPage])

  const loadItems = (params = {}) => {
    ProductResource.loader.fetchItems({
      paging: { perPage: 20, page: currentPage },
      relatives: {
        creator: {
          loader: UserResource.loader,
          resource: 'users',
          foreignKey: 'creator_id',
          params: {
            'fields[users]': 'id,email'
          }
        }
      },
      done: (response, meta) => {
        setProducts(response)
        setPageCount(meta['Page Count'])
      },
      error: (error) => {
        toast.error("Fetch products error")
      }
    })
  }

  const handleChangePage = (event, page) => {
    setCurrentPage(page)
  }

  const newProduct = () => {
    FormModal.show({
      title: 'New product',
      submitData: {},
      schema: schema,
      renderComponent: ({ submitData, handleChange }) => <ProductForm
        submitData={submitData}
        handleChange={handleChange}
      />,
      action: {
        title: "Create",
        onSubmit: (submitData, handleChange, ctx) => {
          return new Promise((resolve, reject) => {
            const data = submitData.values

            data.categories = data.categories.map(category => {
              delete category.id
              delete category.created_at
              delete category.updated_at

              return category
            })

            ProductResource.loader.createItem({
              data: data,
              done: (response) => {
                loadItems()
                resolve(response)
              },
              error: (error) => {
                reject(error)
              }
            })
          })
        }
      }
    })
  }

  return (
    <>
      <FormModal />
      <PaperItem
        {...theme.typography.body2}
        color={theme.palette.text.secondary}
        height={56}
        lineHeight={'60px'}
        borderRadius={3}
      >
        <Grid container spacing={0}>
          <Grid item xs={6} key={1}>
            <Typography variant='h3'
              sx={{
                height: 56,
                float: 'left',
                marginLeft: 3,
                marginTop: 2
              }}
            >Products</Typography>
          </Grid>
          <Grid item xs={6} key={2} >
            <Stack direction={'row'} spacing={1}
              sx={{
                minWidth: 130,
                marginLeft: 'auto',
                marginRight: 2,
                marginTop: 1,
                width: 'max-content'
              }}
            >
              {/* <Button variant='outlined' endIcon={<IconCaretDown fill={theme.palette.primary.main} />} >More actions</Button> */}
              <Button variant='contained'
                onClick={newProduct}
              >New product</Button>
            </Stack>
          </Grid>
        </Grid>
      </PaperItem>
      <MainCard
        sx={{
          borderRadius: 3,
          marginTop: 3,
          minHeight: '40vh',
          position: 'relative'
        }}
      >
        <Grid container spacing={2}>
          {
            products?.map((product, index) => {
              return (
                <Grid item xs={XS_GRID} key={index}>
                  <PaperItem key={index}>
                    <ImageListItem key={index}
                      style={{ height: 180, width: 270, cursor: 'pointer' }}
                      onClick={() => {
                        navigate(`/products/${product.id}`)
                      }}
                    >
                      <img
                        src={`${product.images?.[0] || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hhireb.com%2Ffalls-featured-attraction-the-art-cafe%2F&psig=AOvVaw0tp_GGwEnY3rA-4J45aWTE&ust=1652433602334000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiZhYHR2fcCFQAAAAAdAAAAABAI"}`}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        key={index}
                        title={product.name}
                        subtitle={moment(product.created_at).format('lll')}
                      // actionIcon={
                      //   <IconButton
                      //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      //     aria-label={`info about ${product.name}`}
                      //   >
                      //   </IconButton>
                      // }
                      />
                    </ImageListItem>
                  </PaperItem>
                </Grid>
              )
            })
          }
          <Grid item xs={12}>
            {
              !!pageCount &&
              <Pagination
                count={pageCount}
                sx={{ position: 'absolute', bottom: 20, right: 20 }}
                page={currentPage}
                onChange={handleChangePage}
              />
            }
          </Grid>
        </Grid>
      </MainCard>
    </>
  )
}

export default Product