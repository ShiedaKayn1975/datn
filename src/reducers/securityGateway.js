export default (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_SECURITY_GATEWAYS':
    return {
      ...state,
      steps: action.steps,
      currentStep: action.currentStep
    }
  default:
    return state
  }
}
