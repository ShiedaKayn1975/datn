import { CssConstant } from "../../assets/css/constant"
import { makeStyles } from '@mui/styles'
import wave from '../../assets/images/wave.png'

export const useStyles = makeStyles({
  ...CssConstant,
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#224957'
  },
  formWrapper: {
    width: 430,
    height: 'auto',
    margin: 'auto',
  },
  formWrapperContent: {
    paddingTop: '50%'
  },
  titleWrapper: {
    width: '100%',
    height: 'auto',
    paddingBottom: 30
  },
  title: {
    color: 'white',
    fontSize: 64,
    fontWeight: 400,
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    paddingBottom: 30
  },
  textfieldWrapper: {
    width: '100%'
  },
  input: {
    width: '94%',
    marginBottom: 30
  },
  extraWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30
  },
  rememberMe: {
    width: '50%'
  },
  rememberTitle: {
    color: 'white'
  },
  rememberCheckbox: {
    outline: 'none',
    border: 'none',
  },
  forgotTitle: {
    color: '#20DF7F',
    float: 'right',
    paddingTop: 8,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  forgotPassword: {
    width: '50%'
  },
  submitButton: {
    width: '100%'
  },
  waveFooter: {
    height: 100,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  wave: {
    width: '100%',
    height: 100,
    backgroundImage: `url(${wave})`,
    backgroundSize: '1000px 100px',
    position: 'absolute',
    bottom:0,
    left: 0
  },
  wave1: {
    animation: '$animate1 30s linear infinite',
    zIndex: 1000,
    opacity: 0.1,
    animationDelay: '0s',
    bottom: 0
  },
  "@keyframes animate1": {
    "0%": {
      backgroundPositionX: 0
    },
    "100%": {
      backgroundPositionX: 1000
    }
  },
  wave2: {
    animation: '$animate2 15s linear infinite',
    zIndex: 999,
    opacity: 0.15,
    animationDelay: '-5s',
    bottom: 0
  },
  "@keyframes animate2": {
    "0%": {
      backgroundPositionX: 0
    },
    "100%": {
      backgroundPositionX: 1000
    }
  },
  wave3: {
    animation: '$animate3 30s linear infinite',
    zIndex: 998,
    opacity: 0.2,
    animationDelay: '-2s',
    bottom: 0
  },
  "@keyframes animate3": {
    "0%": {
      backgroundPositionX: 0
    },
    "100%": {
      backgroundPositionX: 1000
    }
  },
})