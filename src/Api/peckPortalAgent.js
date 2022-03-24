import axios from "axios";
import config from 'config'
import Cookies from 'universal-cookie'

export const peckPortalClient = axios.create({
  baseURL: config.peckPortalApi,
  timeout: 30000,
  headers: { 'Content-Type': 'application/vnd.api+json' }
})

peckPortalClient.signin = ({ formData, onSuccess, onError }) => {
  console.log("firm", formData)
  peckPortalClient.post(`/api/v1/signin`, formData, {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (onSuccess) {
      onSuccess(response)
    }
  }).catch(error => {
    if (onError) {
      onError(error)
    }
  })
}

peckPortalClient.signup = ({ formData, onSuccess, onError }) => {
  peckPortalClient.post(`/api/v1/signup`, formData, {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (onSuccess) {
      onSuccess(response)
    }
  }).catch(error => {
    if (onError) {
      onError(error)
    }
  })
}

peckPortalClient.hasToken = () => {
  const cookie = new Cookies()
  if(cookie.get('token')){
    return true
  }

  return false
}

export default peckPortalClient