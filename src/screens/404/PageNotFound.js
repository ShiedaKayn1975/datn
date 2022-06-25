import React from 'react'
import './style.css'
import Cookies from 'universal-cookie'
import config from 'config'

const cookie = new Cookies()

export const PageNotFound = (props) => {

  return (
    <>
      <div className='error-wrapper'>
        <div className='error-body'>
          <div className="noise"></div>
          <div className="overlay"></div>
          <div className="terminal">
            <h1>Error <span className="errorcode">404</span></h1>
            <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <p className="output">Please try to <a href="/" className='a_notfound' onClick={() => cookie.remove('token', { path: '/', domain: config.appDomain})}>go back</a> or <a href="/" className='a_notfound'>return to the homepage</a>.</p>
            <p className="output">Good luck.</p>
          </div>
        </div>
      </div>
    </>
  )
}