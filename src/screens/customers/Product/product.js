import React, { useEffect, useState } from 'react'
import {
  Grid, Typography, Stack, Button, ImageListItem, ImageListItemBar, IconButton,
  Pagination, Box, OutlinedInput, InputAdornment, ButtonBase, Avatar
} from '@mui/material'
import PaperItem from '../../../components/Paper/PaperItem'
import { useTheme } from '@mui/material'
import { MainCard } from '../../../components/Card'
import { FormModal } from '../../../components/Modal'
import AsyncSelect from 'react-select/async';
import CategoryResource from '../../../resources/CategoryResource'
import { customStyles, makeId } from '../../../utils'
import { IconAdjustmentsHorizontal, IconSearch, IconX, IconListSearch } from '@tabler/icons';
import { shouldForwardProp } from '@mui/system';
import { styled } from '@mui/material/styles';

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
  ...theme.typography.commonAvatar,
  ...theme.typography.mediumAvatar,
  background: theme.palette.secondary.light,
  color: theme.palette.secondary.dark,
  '&:hover': {
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.light
  }
}));

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
  width: 434,
  marginLeft: 16,
  paddingLeft: 16,
  paddingRight: 16,
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important'
  },
  [theme.breakpoints.down('lg')]: {
    width: 250
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 4,
    background: '#fff'
  }
}));

const Product = (props) => {
  const theme = useTheme()
  const [products, setProducts] = useState(null)
  const [filters, setFilters] = useState({})

  const loadOptions = (inputValue, loadingData) => {
    return loadingData(inputValue)
  };

  return (
    <>
      <FormModal />
      <PaperItem
        {...theme.typography.body2}
        color={theme.palette.text.secondary}
        minHeight={300}
        borderRadius={3}
      >
        <Grid container spacing={1} sx={{ ml: 1 }}>
          <Grid item>
            <AsyncSelect
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
              })}
              placeholder={"Select category"}
              defaultOptions
              getOptionLabel={({ name }) => name}
              getOptionValue={({ code }) => code}
              onChange={(value) => {
                const currentFilters = { ...filters }
                currentFilters.category = value
                setFilters(currentFilters)
              }}
              value={filters.category || null}
              styles={customStyles()}
            />
          </Grid>
          <Grid item>
            <Grid item>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <OutlineInputStyle
                  id="input-query"
                  value={filters.query || ''}
                  // onChange={(e) => setValue(e.target.value)}
                  placeholder="Search"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                    </InputAdornment>
                  }
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <ButtonBase sx={{ borderRadius: '12px' }}>
                  //       <HeaderAvatarStyle variant="rounded">
                  //         <IconListSearch stroke={1.5} size="1.3rem" />
                  //       </HeaderAvatarStyle>
                  //     </ButtonBase>
                  //   </InputAdornment>
                  // }
                  aria-describedby="search-helper-text"
                  inputProps={{ 'aria-label': 'weight' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </PaperItem>
    </>
  )
}

export default Product