import React from 'react'
import './Nav.css'
import Search from '../Search/Search'

export default function Nav () {
  return (
    <nav className='navbar'>
      <ul>
        <a className='navbar-brand brand' href='/'>
          Lemonade Stand
        </a>
        <a className='navbar-brand contact' href='/contact'>
          Contact
        </a>
        <a className='navbar-brand profile' href='/saved'>
          Profile
        </a>
        <a className='navbar-brand cart' href='/cart'>
          Cart
        </a>
      </ul>
      <Search />
    </nav>
  )
}
