import React, { useEffect, useState } from 'react'
import PaperItem from '../../components/Paper/PaperItem'
import { Grid, Typography, Breadcrumbs, Link, Stack, Button, ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import { IconHome } from '@tabler/icons'
import { MainCard } from '../../components/Card'
import { IconCaretDown } from '@tabler/icons'
import FormModal from '../../components/Modal/FormModal'
import ProductForm from './ProductForm'
import ProductResource from '../../resources/Product'
import { toast } from 'react-toastify'
import UserResource from '../../resources/User'
import InfoIcon from '@mui/icons-material/Info';
import moment from 'moment'

const schema = {
  name: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  categories: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  quality_commitment: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  price: {
    presence: { allowEmpty: false, message: '^Required' },
  },
}

const Product = (props) => {
  const theme = useTheme()
  const [products, setProducts] = useState(null)
  const XS_GRID = 3

  useEffect(() => {
    loadItems()
  }, [])

  const loadItems = (params = {}) => {
    ProductResource.loader.fetchItems({
      paging: { perPage: 20, page: 1 },
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
      done: (response) => {
        setProducts(response)
      },
      error: (error) => {
        toast.error("Fetch products error")
      }
    })
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
          console.log(submitData)
          return new Promise((resolve, reject) => {
            const data = submitData.values
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
              <Button variant='outlined' endIcon={<IconCaretDown fill={theme.palette.primary.main} />} >More actions</Button>
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
          minHeight: '40vh'
        }}
      >
        <Grid container spacing={2}>
          {
            products?.map((product, index) => {
              return (
                <Grid item xs={XS_GRID} key={index}>
                  <PaperItem key={index}>
                    <ImageListItem key={index}
                      style={{height: 180, width: 270, cursor: 'pointer'}}
                    >
                      <img
                        src={`${product.images?.[0] || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hhireb.com%2Ffalls-featured-attraction-the-art-cafe%2F&psig=AOvVaw0tp_GGwEnY3rA-4J45aWTE&ust=1652433602334000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiZhYHR2fcCFQAAAAAdAAAAABAI"}`}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        key={index}
                        title={product.name}
                        subtitle={moment(product.created_at).format('lll')}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${product.name}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  </PaperItem>
                </Grid>
              )
            })
          }
        </Grid>
      </MainCard>
    </>
  )
}

export default Product