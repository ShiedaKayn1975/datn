import React, { useState } from 'react'
import { useStyles } from './style'
import { TextField, Checkbox } from '@mui/material'
import GreyInput from '../../components/Input/GreyInput'
import GreyCheckbox from '../../components/Checkbox/GreyCheckbox'
import CustomDefaultButton from '../../components/Button/CustomDefaultButton'
import clsx from 'clsx'
import WaveFooter from '../../components/Footer/WaveFooter'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { peckPortalClient } from '../../api'
import validate from 'validate.js'
import Cookies from 'universal-cookie'

const schema = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
  password_confirmation: {
    presence: true,
    equality: "password"
  }
}

export const RegisterScreen = (props) => {
  const classes = useStyles()
  const [formData, setFormData] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    let form = formData || {}
    form[event.target.name] = event.target.value
    setFormData(form)
  }

  const signUp = () => {
    if(formData){
      const error = validate(formData, schema)

      if (!error) {
        peckPortalClient.signUp({
          formData: formData,
          onSuccess: (response) => {
            // save data to redux
            const data = response.data

            const account = data.account
            const token = data.token
            const cookieClient = new Cookies()
            cookieClient.set('token', token, { path: '/', domain: 'localhost'})
          },
          onError: (error) => {

          }
        })
      }else{
        setErrors(error)
      }
    }
  }

  return (
    <div className={classes.root}>
      {/* form wrapper */}
      <div className={classes.formWrapper}>
        <div className={classes.formWrapperContent}>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>Sign Up</div>
          </div>
          <div className={classes.description}>Sign up and Let's start!</div>
          <div className={classes.textfieldWrapper}>
            <div
              className={classes.inputWrapper}
            >
              <GreyInput
                aria-label="email"
                placeholder="Enter your email"
                className={classes.input}
                name={'email'}
                onChange={handleChange}
                autoFocus
                error={errors['email']}
                erroricon={<ReportGmailerrorredIcon/>}
              />
            </div>
            <div
              className={classes.inputWrapper}
            >
              <GreyInput
                aria-label="Password"
                placeholder="Password"
                type="password"
                className={classes.input}
                name={'password'}
                onChange={handleChange}
                error={errors['password']}
                erroricon={<ReportGmailerrorredIcon/>}
              />
            </div>
            <div
              className={classes.inputWrapper}
            >
              <GreyInput
                aria-label="Password Confirmation"
                placeholder="Password Confirmation"
                type="password"
                className={classes.input}
                name={'password_confirmation'}
                onChange={handleChange}
                error={errors['password_confirmation']}
                erroricon={<ReportGmailerrorredIcon/>}
              />
            </div>
          </div>
          <div className={classes.submitButton}>
            <CustomDefaultButton
              style={{ width: '100%' }}
              onClick={signUp}
            >
              Sign Up
            </CustomDefaultButton>
          </div>
        </div>
      </div>
      <div className={classes.registerTitle}
        onClick={() => {
          window.location.href = '/login'
        }}
      >
        <p className={classes.registerContent}>Have an account? Sign In</p>
      </div>
      <div className={classes.waveFooter}>
        <WaveFooter />
      </div>
    </div>
  )
}