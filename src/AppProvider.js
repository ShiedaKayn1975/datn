import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import { Provider } from 'react-redux'
import configureStore from './store'

const appStore = configureStore()

const AppProvider = (props) => {

  const withUser = (Component, props) => {
    return <Component {...props} />
  }

  const withoutUser = (Component, props) => {
    return <Component {...props} />
  }

  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default AppProvider