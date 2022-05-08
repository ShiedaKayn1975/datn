import React, { useEffect, useState } from 'react'
import { TextField, Stack, Box, Rating } from '@mui/material'
import { styled } from '@mui/system';
import FileUploader from '../../components/FileUploader/FileUploader';
import StackInput from '../../components/Input/StackInput';

const DivComponent = styled('div')({
  marginBottom: 12
})

const ProductForm = (props) => {
  const { submitData, handleChange, ...others } = props

  const handleChangeText = (event) => {
    handleChange(event.target.name, event.target.value)
  }

  const handleSelectedTags = (items) => {
    handleChange('tags', items)
  }

  return (
    <div>
      <Stack direction={'column'}>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Name</Box>
          <TextField fullWidth
            onChange={handleChangeText}
            name='name'
            value={submitData.values.name || ''}
          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Tags</Box>
          <StackInput
            variant='outlined'
            fullWidth
            name='tags'
            selectedTags={handleSelectedTags}
            // value={newProduct.tags || []}
          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Images</Box>
          <FileUploader
            preview={true}
          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Quality commitment</Box>
          <Rating
            name="quality_commitment"
            value={submitData.values.quality_commitment || 0}
            onChange={(event, newValue) => {
              handleChange('quality_commitment', newValue)
            }}
            precision={0.5}
          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Price</Box>
          <TextField fullWidth
            onChange={handleChangeText}
            type='number'
            name='price'
            value={submitData.values.price || ''}
          />
        </DivComponent>
      </Stack>
    </div>
  )
}

export default ProductForm