import React from 'react'
import PaperItem from '../../components/Paper/PaperItem'
import { Grid, Typography, Breadcrumbs, Link, Stack, Button } from '@mui/material'
import { useTheme } from '@mui/material'
import { IconHome } from '@tabler/icons'
import { MainCard } from '../../components/Card'
import { IconCaretDown } from '@tabler/icons'
import FormModal from '../../components/Modal/FormModal'
import ProductForm from './ProductForm'
import ProductResource from '../../resources/Product'

const schema = {
  name: {
    presence: { allowEmpty: false, message: '^Required' },
  },
  tags: {
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

  const newProduct = () => {
    FormModal.show({
      title: 'New product',
      submitData: {},
      width: '60vw',
      schema: schema,
      renderComponent: ({submitData, handleChange}) => <ProductForm
        submitData={submitData}
        handleChange={handleChange}
      />,
      action: {
        title: "Create",
        onSubmit: (submitData, handleChange, ctx) => {
          ProductResource.loader.createItem({
            data: submitData.values,
            done: (response) => {
              console.log(response)
            },
            error: (error) => {

            }
          })
        }
      }
    })
  }

  return (
    <>
      <FormModal/>
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

      </MainCard>
    </>
  )
}

export default Product