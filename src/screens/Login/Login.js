import React, { useState } from 'react'
import { useStyles } from './style'
import { TextField, Checkbox } from '@mui/material'
import GreyInput from '../../components/Input/GreyInput'
import GreyCheckbox from '../../components/Checkbox/GreyCheckbox'
import CustomDefaultButton from '../../components/Button/CustomDefaultButton'
import clsx from 'clsx'
import WaveFooter from '../../components/Footer/WaveFooter'
import { peckPortalClient } from '../../api'
import validate from 'validate.js'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const schema = {
  username: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
}

export const LoginScreen = (props) => {
  const classes = useStyles()
  const [form, setForm] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    let formData = form || {}
    formData[event.target.name] = event.target.value
    setForm(formData)
  }

  const signIn = () => {
    if (form) {
      /// validate form
      const error = validate(form, schema)
      setErrors(error)

      if (!error) {
        peckPortalClient.login({
          username: form.username, 
          password: form.password,
          onSuccess: (response) => {

          },
          onError: (response) => {

          }
        })
      }
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
            <div
              className={classes.inputWrapper}
            >
              <GreyInput
                aria-label="Username"
                placeholder="Enter your email"
                className={classes.input}
                name={'username'}
                onChange={handleChange}
                autoFocus
                value={form?.username}
                error={errors['username']}
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
                name="password"
                value={form?.password}
                className={classes.input}
                onChange={handleChange}
                error={errors['password']}
                erroricon={<ReportGmailerrorredIcon/>}
              />
            </div>
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