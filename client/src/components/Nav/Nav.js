import React from 'react'
import './Nav.css'
import Search from '../Search/Search'

export default function Nav () {
  return (
    <nav className='navbar' id='navBar'>
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
        <a href='javascript:void(0);' class='icon' onclick='myFunction()'>
          <i class='fa fa-bars'></i>
        </a>
      </ul>
      <Search />
    </nav>
  )
}

function myFunction () {
  var x = document.getElementById('navBar')
  if (x.className === 'navbar') {
    x.className += ' responsive'
  } else {
    x.className = 'navbar'
  }
}
