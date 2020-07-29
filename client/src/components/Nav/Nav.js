import React from 'react'
import './Nav.css'

export default function Nav () {
  return (
    <div className='nav-header'>
      <header
        role='banner'
        className='NavMain-Banner navbar-expand navbar-dark'
      >
        <a href='/'></a>
      </header>
      <div className='btn-group'>
        <button type='button' className='btn btn-danger'>
          Action
        </button>
        <button
          type='button'
          className='btn dropdown-toggle dropdown-toggle-split'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <span className='sr-only'>Toggle Dropdown</span>
        </button>
        <div className='dropdown-menu'>
          <a className='dropdown-item' href='/Home'>
            Action
          </a>
          <a className='dropdown-item' href='/Login'>
            Another action
          </a>
          <a className='dropdown-item' href='/Contact'>
            Something else here
          </a>
          <div class='dropdown-divider'></div>
          <a className='dropdown-item' href='/Cart'>
            Separated link
          </a>
        </div>
      </div>
    </div>
  )
}
