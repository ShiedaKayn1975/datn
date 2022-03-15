import axios from "axios";
import config from 'config'

export const peckPortalClient = axios.create({
    baseURL: config.peckPortalApi,
    timeout: 30000,
    headers: { 'Content-Type': 'application/vnd.api+json' }
})

peckPortalClient.login = (username, password, extra = {}) => {
    console.log(username)
}

export default peckPortalClient