import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './screens/Login'

const AppProvider = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppProvider