import React from 'react'
import { useStyles } from './style'
import { TextField, Checkbox } from '@mui/material'
import GreyInput from '../../components/Input/GreyInput'
import GreyCheckbox from '../../components/Checkbox/GreyCheckbox'
import CustomDefaultButton from '../../components/Button/CustomDefaultButton'
import clsx from 'clsx'
import WaveFooter from '../../components/Footer/WaveFooter'

export const RegisterScreen = (props) => {
  const classes = useStyles()

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
            <GreyInput
              aria-label="Password Confirmation"
              placeholder="Password Confirmation"
              type="password"
              className={classes.input}
              // fullwidth={true}
            />
          </div>
          <div className={classes.submitButton}>
            <CustomDefaultButton
              style={{width: '100%'}}
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
        <WaveFooter/>
      </div>
    </div>
  )
}