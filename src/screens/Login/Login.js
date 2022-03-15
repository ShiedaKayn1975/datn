import React from 'react'
import { useStyles } from './style'
import { TextField, Checkbox } from '@mui/material'
import GreyInput from '../../components/Input/GreyInput'
import GreyCheckbox from '../../components/Checkbox/GreyCheckbox'
import CustomDefaultButton from '../../components/Button/CustomDefaultButton'
import clsx from 'clsx'
import WaveFooter from '../../components/Footer/WaveFooter'

export const LoginScreen = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* form wrapper */}
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
            />
            <GreyInput
              aria-label="Password"
              placeholder="Password"
              type="password"
              className={classes.input}
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
              style={{width: '100%'}}
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
        <WaveFooter/>
      </div>
    </div>
  )
}