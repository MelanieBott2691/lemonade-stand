import React from 'react'
import './style.css'

function Nav () {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <ul>
        <a className='navbar-brand brand' href='/'>
          Lemonade Stand
        </a>
        <a className='navbar-brand search' href='/'>
          Search
        </a>
        <a
          className='navbar-brand SignIn'
          href='client/src/components/SignIn/SignIn'
        >
          Sign In
        </a>
        <a
          className='navbar-brand contact'
          href='client/src/components/Contact'
        >
          Contact
        </a>
      </ul>
    </nav>
  )
}

export default Nav
