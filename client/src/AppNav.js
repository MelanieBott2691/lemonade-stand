import './AppNav.css'
import EmailIcon from '@material-ui/icons/Email'
import BuildIcon from '@material-ui/icons/Build'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonIcon from '@material-ui/icons/Person'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function AppNav () {
  return (
    <Navbar>
      <NavItem icon='😁' />
      <NavItem icon='😉' />
      <NavItem icon={<ShoppingCartIcon />} />
      <NavItem icon={<ExpandMoreIcon />}>
        <DropdownMenu></DropdownMenu>
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
      <a href='/contact' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

function DropdownMenu () {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  //   const dropdownRef = useRef(null)
  //   useEffect(() => {
  //     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  //   }, [])

  function calcHeight (el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem (props) {
    return (
      <a
        href='/home'
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
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            rightIcon={<PersonIcon />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon='🦧'
            rightIcon={<EmailIcon />}
            goToMenu='animals'
          >
            Animals
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
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BuildIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<KeyboardArrowDownIcon />}>
            <h2>Animals</h2>
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

export default AppNav
