import React, { useEffect, useState } from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem, InputBase } from '@mui/material'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { switchApp } from '../../../../actions/appAction';
import { UserResource } from '../../../../resources';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 10,
    padding: '8px 26px 8px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const SwitchAppSection = (props) => {
  const [ app, setApp ] = useState('seller')
  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    setApp(currentUser.current_app == 'customer' ? 'customer' : 'seller')
  }, [currentUser])

  const handleChange = (event) => {
    setApp(event.target.value)
    props.onSelectApp(event.target.value)

    UserResource.loader.commitAction({
      id: currentUser.id,
      data: {
        action_code: 'switch_app',
        action_data: {
          app: event.target.value
        }
      },
      done: (response) => {
        window.location.reload()
      },
      error: (error) => {
        toast.error("Cannot switch app")
      }
    })
  }

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block', ml: 2 } }}>
        <FormControl sx={{ m: 1 }} variant="standard">
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={app}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={'seller'}>Seller</MenuItem>
            <MenuItem value={'customer'}>Customer</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  )
}

export default SwitchAppSection