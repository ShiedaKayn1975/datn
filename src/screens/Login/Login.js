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
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { loadProfile } from '../../actions/profileAction'

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
  }
}

export const LoginScreen = (props) => {
  const classes = useStyles()
  const [form, setForm] = useState(null)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    let formData = form || {}
    formData[event.target.name] = event.target.value
    setForm({...formData})
  }

  const signIn = () => {
    if (form) {
      const error = validate(form, schema)

      if (!error) {
        setIsSubmitting(true)
        props.signin({
          formData: form,
          onSuccess: (response) => {
            let token = response.data.token
            peckPortalClient.receiveAuthToken(token)

            setIsSubmitting(false)
            toast.success("Login success")
            dispatch(loadProfile())
          },
          onError: (error) => {
            setIsSubmitting(false)
            toast.error(error)
          }
        })
      }else{
        setErrors(error)
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
                aria-label="email"
                placeholder="Enter your email"
                className={classes.input}
                name={'email'}
                onChange={handleChange}
                autoFocus
                value={form?.email || ''}
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
                name="password"
                value={form?.password || ''}
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
              loading={isSubmitting}
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