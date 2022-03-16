import axios from "axios";
import config from 'config'

export const peckPortalClient = axios.create({
  baseURL: config.peckPortalApi,
  timeout: 30000,
  headers: { 'Content-Type': 'application/vnd.api+json' }
})

peckPortalClient.login = ({ username, password, onSuccess, onError }) => {
  let formData = {
    username: username,
    password: password
  }

  peckPortalClient.post(`${config.peckPortalApi}/api/v1/login`, formData).then(response => {
    if (onSuccess) {
      onSuccess(response)
    }
  }).catch(error => {
    if (onError) {
      onError(error)
    }
  })
}

export default peckPortalClient