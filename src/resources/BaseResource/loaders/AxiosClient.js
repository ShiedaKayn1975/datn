import JsonApiClient from "./JsonApiClient"

export default class AxiosClient {
  constructor(props){
    super(props)
    this.client = props.client
    this.resourceName = props.resourceName

    this.client = new JsonApiClient({
      client: this.client
    })
  }

  fetchItems = ({}) => {
    
  }
}