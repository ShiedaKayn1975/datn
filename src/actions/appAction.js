export const selectApp = (app) => dispatch => {
    return dispatch({
        type: 'SELECT_APP',
        app: app
    })
}