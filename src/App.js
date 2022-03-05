import React from 'react'
import './App.css'
import './App.scss'
import AppProvider from './AppProvider'

const App = (props) => {
  return (
    <AppProvider 
      {...props}
    />
  )
}

export default App