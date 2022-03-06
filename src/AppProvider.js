import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './screens/Login'
import RegisterForm from './screens/Register'

const AppProvider = (props) => {

  const withUser = (Component, props) => {
    return <Component {...props} />
  }

  const withoutUser = (Component, props) => {
    return <Component {...props} />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppProvider