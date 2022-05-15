import { peckPortalClient } from '../../Api'
import { AxiosClient } from '../BaseResource'

export const CategoryResource = {
  loader: new AxiosClient({
    client: peckPortalClient,
    resourceName: 'categories'
  })
}

