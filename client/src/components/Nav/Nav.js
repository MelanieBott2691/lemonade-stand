// import React from 'react'
// import './Nav.css'
// import Search from '../Search/Search'
// import { logo } from '../../assets/images/lemonadestandlogo.png'
// import NavDropdown from '../../components/Nav/NavDropdown'

import React from 'react'
import { Nav } from 'react-bootstrap'

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

class NavDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
  }
  showDropdown (e) {
    e.preventDefault()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render () {
    const classDropdownMenu =
      'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='/'
          id='navbarDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
          onClick={e => {
            this.showDropdown(e)
          }}
        >
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby='navbarDropdown'>
          {this.props.children}
        </div>
      </li>
    )
  }
}

class Navigation extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <NavItem path='/' name='Home' />
            <NavItem path='/page2' name='Page2' />
            <NavItem path='/page3' name='Disabled' disabled='true' />

            <NavDropdown name='Dropdown'>
              <a className='dropdown-item' href='/'>
                Action
              </a>
              <a className='dropdown-item' href='/'>
                Another action
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='/'>
                Something else here
              </a>
            </NavDropdown>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navigation

// export default function Nav () {
//   return (
//     <nav className='navbar'>
//       <div className='nav-header'>
//         <Search />
//         <header role='banner'>
//           <img
//             className='nav-image'
//             src={logo}
//             alt='logo'
//             width='70'
//             height='90'
//             alignItems='left'
//           />
//           {/* <div className='search-container'>
//             <form className='search-form'> */}
//           {/* <input type='text' placeholder='Search...'></input>
//               <button type='submit'>Submit</button> */}

//           {/* </form>
//           </div> */}
//           <a href='/Home'></a>
//         </header>
//         <NavDropdown name='Dropdown'>
//           <a className='dropdown-item' href='/'>
//             Action
//           </a>
//           <a className='dropdown-item' href='/'>
//             Another action
//           </a>
//           <div className='dropdown-divider'></div>
//           <a className='dropdown-item' href='/'>
//             Something else here
//           </a>
//         </NavDropdown>

//         <div className='button-container'>
//           <div className='btn-group'>
//             <button type='button' className='btn'>
//               Action
//             </button>
//             <button
//               type='button'
//               className='btn dropdown-toggle dropdown-toggle-split'
//               data-toggle='dropdown'
//               aria-haspopup='true'
//               aria-expanded='false'
//             >
//               <span className='sr-only'>Toggle Dropdown</span>
//             </button>
//             <div className='dropdown-menu'>
//               <a className='dropdown-item' href='/Home'>
//                 Action
//               </a>
//               <a className='dropdown-item' href='/Login'>
//                 Another action
//               </a>
//               <a className='dropdown-item' href='/Contact'>
//                 Something else here
//               </a>
//               <div class='dropdown-divider'></div>
//               <a className='dropdown-item' href='/Cart'>
//                 Separated link
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }
