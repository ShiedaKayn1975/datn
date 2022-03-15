import React, { useState } from 'react'
import { useStyles } from './style'
import { TextField, Checkbox } from '@mui/material'
import GreyInput from '../../components/Input/GreyInput'
import GreyCheckbox from '../../components/Checkbox/GreyCheckbox'
import CustomDefaultButton from '../../components/Button/CustomDefaultButton'
import clsx from 'clsx'
import WaveFooter from '../../components/Footer/WaveFooter'
import { peckPortalClient } from '../../Api'
import validate from 'validate.js'

const schema = {
  
}

export const LoginScreen = (props) => {
  const classes = useStyles()
  const [form, setForm] = useState(null)

  const handleChange = (event) => {
    let formData = form || {}
    formData[event.target.name] = event.target.value
    setForm(formData)
  }

  const signIn = () => {
    if(formData){
      /// validate form
      peckPortalClient.login(formData.username, formData.password)
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.formWrapper}>
        <div className={classes.formWrapperContent}>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>Sign In</div>
          </div>
          <div className={classes.description}>Sign in and Let's start!</div>
          <div className={classes.textfieldWrapper}>
            <GreyInput
              aria-label="Username"
              placeholder="Username or Email"
              className={classes.input}
              // fullwidth={true}
              name={'username'}
              onChange={handleChange}
            />
            <GreyInput
              aria-label="Password"
              placeholder="Password"
              type="password"
              name="password"
              className={classes.input}
              onChange={handleChange}
            // fullwidth={true}
            />
          </div>
          <div className={classes.extraWrapper}>
            <div className={classes.rememberMe}>
              <GreyCheckbox
                className={classes.rememberCheckbox}
              />
              <span className={classes.rememberTitle}>Remember me</span>
            </div>
            <div className={classes.forgotPassword}>
              <a className={classes.forgotTitle}>Forgot password?</a>
            </div>
          </div>
          <div className={classes.submitButton}>
            <CustomDefaultButton
              style={{ width: '100%' }}
              onClick={signIn}
            >
              Sign In
            </CustomDefaultButton>
          </div>
        </div>
      </div>
      <div className={classes.registerTitle}
        onClick={() => {
          window.location.href = '/register'
        }}
      >
        <p className={classes.registerContent}>Don't have an account yet? Sign Up</p>
      </div>
      <div className={classes.waveFooter}>
        <WaveFooter />
      </div>
    </div>
  )
}