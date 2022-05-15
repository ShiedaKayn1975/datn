import React, { useEffect, useState } from 'react'
import { TextField, Stack, Box, Rating, InputAdornment } from '@mui/material'
import { styled } from '@mui/system';
import AsyncSelect from 'react-select/async';
import { customStyles, makeId } from '../../utils';
import CategoryResource from '../../resources/CategoryResource';
import TinyEditorComponent from '../../components/TinyEditor/TinyEditorComponent';
import { MultiFileUploader } from '../../components/MultiFileUploader';

const DivComponent = styled('div')({
  marginBottom: 12
})

const ProductForm = (props) => {
  const { submitData, handleChange, ...others } = props

  const handleChangeText = (event) => {
    handleChange(event.target.name, event.target.value)
  }

  const hasError = (field) => {
    return submitData.errors && submitData.errors[field]
  }

  const loadOptions = (inputValue, loadingData) => {
    return loadingData(inputValue)
  };

  return (
    <div>
      <Stack direction={'column'}>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Name<span style={{color: 'red'}}>*</span></Box>
          <TextField fullWidth
            onChange={handleChangeText}
            name='name'
            value={submitData.values.name || ''}
          />
          {hasError('name') && <small style={{ color: 'red' }}>{submitData.errors.name[0]}</small>}
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Category <span style={{color: 'red'}}>*</span></Box>
          <AsyncSelect
            // menuPortalTarget={document.body}
            isMulti
            className={"MuiFormControl-marginDense"}
            isSearchable
            loadOptions={(inputValue) => loadOptions(inputValue, function loadingData(inputValue) {
              return new Promise(resolve => {
                CategoryResource.loader.fetchItems({
                  filters: {
                    name: inputValue
                  },
                  paging: { page: 1, perPage: 20 },
                  done: (response) => {
                    resolve(response)
                  },
                  error: (error) => {
                    resolve([])
                  }
                })
              })
            })
            }
            defaultOptions
            getOptionLabel={({ name }) => name}
            getOptionValue={({ code }) => code}
            onChange={(value) => {
              handleChange('categories', value)
            }}
            value={submitData.values.categories || null}
            styles={customStyles()}
          />
          {hasError('categories') && <small style={{ color: 'red' }}>{submitData.errors.categories[0]}</small>}
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Images</Box>
          {/* <FileUploader
            preview={true}
            onChange={(files) => {
              handleChange('images', files)
            }}
          /> */}
          <MultiFileUploader
            onChange={(files) => {
              handleChange('images', files)
            }}
          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Description</Box>
          <TinyEditorComponent
            style={{ width: '100%' }}
            content={''}
            id={makeId(20)}
            onEditorChange={(value) => {
              handleChange('description', value)
            }}
          />
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Price<span style={{color: 'red'}}>*</span></Box>
          <TextField fullWidth
            onChange={handleChangeText}
            type='number'
            name='price'
            value={submitData.values.price || ''}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
          {hasError('price') && <small style={{ color: 'red' }}>{submitData.errors.price[0]}</small>}
        </DivComponent>
        <DivComponent>
          <Box fontWeight={'bold'} fontSize={13} marginBottom={1} >Quality commitment<span style={{color: 'red'}}>*</span></Box>
          <Rating
            name="quality_commitment"
            value={submitData.values.quality_commitment || 0}
            onChange={(event, newValue) => {
              handleChange('quality_commitment', newValue)
            }}
            precision={0.5}
          />
          {hasError('quality_commitment') && <small style={{ color: 'red' }}>{submitData.errors.quality_commitment[0]}</small>}
        </DivComponent>
      </Stack>
    </div>
  )
}

export default ProductForm