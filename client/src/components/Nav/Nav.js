import './Nav.css'
import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Search from './components/Search/Search'

// icons
import EmailIcon from '@material-ui/icons/Email'
import BuildIcon from '@material-ui/icons/Build'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonIcon from '@material-ui/icons/Person'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { ReactComponent as logo } from './assets/lemonadestandlogo.png'

function Nav () {
  return (
    <Navbar>
      //{' '}
      <img
        alt='Lemonade Stand'
        src={logo}
        width='70'
        height='90'
        className='navbar--logo'
        alignItems='left'
      />
      <Search />
      <NavItem icon={<AddShoppingCartIcon />} />
      <NavItem icon={<ExpandMoreIcon />}>
        // <DropdownMenu></DropdownMenu>
        //{' '}
      </NavItem>
    </Navbar>
  )
}

function Navbar (props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  )
}

function NavItem (props) {
  const [open, setOpen] = useState(false)

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function DropdownMenu () {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight (el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem (props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon={<PersonIcon />} goToMenu='profile'>
            My Profile
          </DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />} goToMenu='settings'>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<EmailIcon />} goToMenu={Contact}>
            Contact
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<ChevronLeftIcon />}>
            <h2>Main Menu</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>Menu</DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>Menu</DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>Menu</DropdownItem>;
          <DropdownItem leftIcon={<EmailIcon />} goToMenu={Home}>
            Home
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'login'}
        timeout={500}
        classNames='menu-third'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<KeyboardArrowDownIcon />}>
            <h2>Login</h2>
          </DropdownItem>
          <DropdownItem leftIcon='🦘'>Kangaroo</DropdownItem>
          <DropdownItem leftIcon='🐸'>Frog</DropdownItem>
          <DropdownItem leftIcon='🦋'>Horse?</DropdownItem>
          <DropdownItem leftIcon='🦔'>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Nav
