import { peckPortalClient } from '../../Api'
import { AxiosClient } from '../BaseResource'

export const AuctionProductResource = {
  loader: new AxiosClient({
    client: peckPortalClient,
    resourceName: 'auction_products'
  })
}

