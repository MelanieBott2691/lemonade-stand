import React from 'react'
import { Nav } from 'react-bootstrap'
import './Nav.css'
// import Search from '../Search/Search'
// import { logo } from '../../assets/images/lemonadestandlogo.png'

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = props.path === pageURI ? 'nav-item active' : 'nav-item'
  const aClassName = props.disabled ? 'nav-link disabled' : 'nav-link'
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className='sr-only'>(current)</span>
        ) : (
          ''
        )}
      </a>
    </li>
  )
}

class Navigation extends React.Component {
  render () {
    return (
      <div className='container'>
        {/* <nav className='navbar'> */}
        {/* <div className='container'> */}
        <div className='row'>
          <div className='col-sm'>One of three columns</div>
          <div className='col-sm'>One of three columns</div>
          <div className='col-sm'>One of three columns</div>
        </div>
        {/* </div> */}
        {/* </nav> */}
      </div>
    )
  }
}
export default Navigation
