import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Redirect, Navigate, useNavigate, useLocation } from 'react-router-dom'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import { Provider } from 'react-redux'
import configureStore from './store'
import { loadProfile } from './actions/profileAction'
import { useSelector, useDispatch } from 'react-redux'
import { peckPortalClient } from './api'
import AppContext from './AppContext'
import { createBrowserHistory } from 'history'
import PageNotFound from './screens/404'
import SecurityGateway from './screens/SecurityGateway'
import AccountActivation from './screens/AccountActivation'
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes'

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
          loadingState={loadingState}
        />
      </AppContext.Provider>
    )
  }

  if (!peckPortalClient.hasToken()) {
    return props.children(false, {})
  }

  if (loadingState.currentUser == 'failed') {
    return <PageNotFound />
  }

  return <>Loading</>
}

const withUser = (Component, extraProps = {}) => {
  return function (props) {
    const currentUser = useSelector(state => state.currentUser)
    return currentUser ? <Component {...props} {...extraProps} /> : <Navigate to="/" />
  }
}

const withoutUser = (Component, extraProps = {}) => {
  return function (props) {
    let currentUser = useSelector(state => state.currentUser)
    return currentUser ? <Navigate to="/" /> : <Component {...props} {...extraProps} />
  }
}

const SignInWrapper = withoutUser(LoginScreen, { signin: peckPortalClient.signin })
const SignUpWrapper = withoutUser(RegisterScreen, { signup: peckPortalClient.signup })

const AppProvider = (props) => {

  return (
    <div>
      <Provider store={appStore}>
        <ThemeProvider theme={theme()}>
          <BrowserRouter history={appHistory}>
            <AppInitialize>
              {
                ({ appReady, currentUser, loadingState }) => (
                  <>
                    {
                      (currentUser?.status == 'validating') ?
                        <Routes>
                          <Route exact path='/security_gateway' element={<SecurityGateway />} />
                          <Route exact path='/activation' element={<AccountActivation/>} />
                          <Route path="*" element={<Navigate to="/security_gateway" />} />
                        </Routes>
                        :
                        <Routes>
                          <Route exact path='/' element={<SignInWrapper />} />
                          <Route exact path='/login' element={<SignInWrapper />} />
                          <Route exact path='/register' element={<SignUpWrapper />} />
                          <Route path='/404' element={<PageNotFound />} />
                          <Route path="*" element={<Navigate to="/404" />} />
                        </Routes>
                    }
                  </>
                )
              }
            </AppInitialize>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default AppProvider