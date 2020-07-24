import React from 'react'
import './Nav.css'
import Search from '../Search/Search'

export default function Nav () {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <ul>
        <a className='navbar-brand brand' href='/'>
          Lemonade Stand
        </a>
        <a className='navbar-brand contact' href='/contact'>
          Contact
        </a>
        <a className='navbar-brand saved' href='/saved'>
          Profile
        </a>
        <a className='navbar-brand saved' href='/cart'>
          Cart
        </a>
      </ul>
      <Search />
    </nav>
  )
}
