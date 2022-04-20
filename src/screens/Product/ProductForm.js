import React from 'react'
import { TextField, Stack, Box } from '@mui/material'
import { styled } from '@mui/system';
import FileUploader from '../../components/FileUploader/FileUploader';

const DivComponent = styled('div')({
  marginBottom: 12
})

const ProductForm = (props) => {
  return (
    <div>
      <Stack direction={'column'}>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} >Name</Box>
          <TextField fullWidth

          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} >Tag</Box>
          <TextField fullWidth

          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} >Images</Box>
          <FileUploader
            preview={true}
          />
        </DivComponent>
      </Stack>
    </div>
  )
}

export default ProductForm