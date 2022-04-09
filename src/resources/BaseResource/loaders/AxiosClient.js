import JsonApiClient from "./JsonApiClient"

export default class AxiosClient {
  constructor(props){
    this.client = props.client
    this.resourceName = props.resourceName

    this.jsonApiClient = new JsonApiClient({
      client: this.client
    })
  }

  fetchItems = ({}) => {
    
  }

  /*
    @param id: object id
    @param done: onDone
    @param error: onError


    @param data: {
      action_code: 'code',
      action_data: {
        
      }
    }
  */ 
  commitAction = ({id, data, done, error}) => {
    let path = this.client.getResourcePath(this.resourceName, id, 'actions')
    this.client.post(path, data).then(response => {
      if(done) done(response)
    }).catch(err => {
      if(error) error(err)
    })
  }
}