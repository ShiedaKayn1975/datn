import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Redirect, Router} from 'react-router-dom'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import { Provider } from 'react-redux'
import configureStore from './store'
import { loadProfile } from './actions/profileAction'
import { useSelector, useDispatch } from 'react-redux'
import { peckPortalClient } from './api'
import AppContext from './AppContext'
import { createBrowserHistory } from 'history'

const loggerStore = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const appHistory = createBrowserHistory()

const appStore = configureStore({}, [
  loggerStore
])

const AppInitialize = (props) => {
  const currentUser = useSelector(state => state.currentUser)
  const loadingState = useSelector(state => state.loadingState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentUser && peckPortalClient.hasToken()) {
      dispatch(loadProfile())
    }
  }, [currentUser])

  if (currentUser) {
    return (
      <AppContext.Provider value={{ currentUser }}>
        <props.children
          appReady={true}
          currentUser={currentUser}
        />
      </AppContext.Provider>
    )
  }

  if(!peckPortalClient.hasToken()){
    return props.children(false, {})
  }

  if (loadingState.currentUser == 'failed') {
    return <>Error</>
  }

  return <>Loading</>
}

const withUser = (Component, extraProps = {}) => {
  return function (props) {
    const currentUser = useSelector(state => state.currentUser)
    return currentUser ? <Component {...props} {...extraProps} /> : <Redirect to='/login' />
  }
}

const withoutUser = (Component, extraProps = {}) => {
  return function (props) {
    let currentUser = useSelector(state => state.currentUser)
    return currentUser ? <Redirect to='/' /> : <Component {...props} {...extraProps} />
  }
}

const SignInWrapper = withoutUser(LoginScreen, { sigin: peckPortalClient.sigin })
const SignUpWrapper = withoutUser(RegisterScreen, { signup: peckPortalClient.signup })

const AppProvider = (props) => {

  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter history={appHistory}>
          <AppInitialize>
            {
              ({appReady, currentUser}) => (
                <Routes>
                  <Route exact path='/' element={<SignInWrapper/>} />
                  <Route exact path='/login' element={<SignInWrapper/>} />
                  <Route exact path='/register' component={<SignUpWrapper/>} />
                </Routes>
              )
            }
          </AppInitialize>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default AppProvider