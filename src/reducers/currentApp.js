export default (state = null, action) => {
    switch (action.type) {
    case 'SELECT_APP':
      return action.app
    default:
      return state
    }
  }