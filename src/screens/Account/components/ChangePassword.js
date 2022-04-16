import React, { useState } from 'react'
import { MainCard } from '../../../components/Card'
import { Grid, TextField, Button } from '@mui/material'
import validate from 'validate.js'
import { peckPortalClient } from '../../../api'

const schema = {
  current_password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
  new_password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
  confirm_new_password: {
    presence: true,
    equality: "new_password"
  }
}

const ChangePassword = (props) => {
  const [ form, setForm ] = useState({})
  const [ formError, setFormError ] = useState({})

  const handleChange = (event) => {
    const formData = Object.assign({}, form)
    formData[event.target.name] = event.target.value
    setForm(formData)
  }

  const handleChangePassword = () => {
    const errors = validate(form, schema)
    if(errors){
      setFormError(errors)
    }else{
      peckPortalClient.changePassword({
        formData: form,
        onSuccess: (response) => {
          console.log(response)
        },
        onError: (error) => {
          
        }
      })
    }
  }

  const clear = () => {
    setForm({})
    setFormError({})
  }

  return (
    <>
      <MainCard
        title='Change password'
        darkTitle={true}
        variantTitle='h4'
      >
        <Grid container spacing={2}
          sx={{ marginBottom: 2 }}
        >
          <Grid
            item
            xs={6}
          >
            <TextField fullWidth
              placeholder='Current password'
              label='Current password'
              type={'password'}
              name='current_password'
              value={form.current_password || ''}
              onChange={handleChange}
              error={!!formError.current_password}
              helperText={formError.current_password}
            />
          </Grid>
          <Grid
            item
          >

          </Grid>
        </Grid>
        <Grid container spacing={2}
          sx={{ marginBottom: 4 }}
        >
          <Grid
            item
            xs={6}
          >
            <TextField fullWidth
              placeholder='New password'
              label='New password'
              type={'password'}
              name='new_password'
              value={form.new_password || ''}
              onChange={handleChange}
              error={!!formError.new_password}
              helperText={formError.new_password}
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <TextField fullWidth
              placeholder='Confirm new password'
              label='Confirm new password'
              type={'password'}
              name='confirm_new_password'
              value={form.confirm_new_password || ''}
              onChange={handleChange}
              error={!!formError.confirm_new_password}
              helperText={formError.confirm_new_password}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xs={8}
          ></Grid>
          <Grid
            item
            xs={4}
          >
            <div style={{float: 'right'}}>
              <Button variant='contained'
                sx={{ marginRight: 2 }}
                onClick={handleChangePassword}
              >Change password</Button>
              <Button 
                onClick={clear}
              >Clear</Button>
            </div>
          </Grid>
        </Grid>
      </MainCard>
    </>
  )
}

export default ChangePassword