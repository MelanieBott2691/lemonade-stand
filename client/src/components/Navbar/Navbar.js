import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { getNumbers } from '../../actions/getAction'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/logo.png'
import Search from '../Search/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import AccountBoxIcon from '@material-ui/icons/AccountBox'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { CSSTransition } from 'react-transition-group'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import EmailIcon from '@material-ui/icons/Email'
import BuildIcon from '@material-ui/icons/Build'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonIcon from '@material-ui/icons/Person'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// import { ReactComponent as CartIcon } from '../../icons/cart.svg'

function Navigation (props) {
  const [open, setOpen] = useState(false)
  console.log(props)

  useEffect(() => {
    getNumbers()
  }, [])
  return (
    <header className='image'>
      <img src={logo} alt='logo' />

      <div className='overlay'></div>
      <nav>
        <div className='search-bar'>
          <Search />
        </div>

        <ul>
          <li className='dropdown-menu'>
            {/* <Link to='/about' onClick={() => setOpen(!open)}>
              {props.icon} */}
            <NavItem
              icon={<ExpandMoreIcon />}
              goToMenu='/'
              onClick={() => setOpen(!open)}
            >
              {props.icon}
              <DropdownMenu></DropdownMenu>
            </NavItem>
            {/* </Link> */}
            {open && props.children}
          </li>

          <li className='cart'>
            {/* <Link to='/cart'> */}
            <NavItem
              icon={<AddShoppingCartIcon />}
              goToMenu={ShoppingCart}
              onClick={() => setOpen(!open)}
            >
              <span>{props.basketProps.basketNumbers}</span>
            </NavItem>
            {/* </Link> */}
          </li>
          {/* <li className='cart'>
            <Link to='/cart'>
              <NavItem icon={<AddShoppingCartIcon />} goToMenu='/cart'>
                {props.basketProps.basketNumbers}
              </NavItem>
              {/* <span>{props.basketProps.basketNumbers}</span> */}
          {/* </Link> */}
          {/* </li>  */}
        </ul>
      </nav>
    </header>
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
// DropdownMenu
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
          <DropdownItem leftIcon={<PersonIcon />}>Profile</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />} goToMenu='settings'>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<EmailIcon />} goToMenu='contact'>
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

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navigation)

// import React from 'react';
// import './Nav.css';
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import Search from '../Search/Search';

// const navbar = (props) => (
//   <header className="navbar">
//     <nav className="navbar__navigation">
//       <div className="navbar__toggle-button">
//         <DrawerToggleButton click={props.drawerClickHandler} />
//       </div>
//       <div className="navbar__logo">
//         <img
//           src="../../assets/images/lemonadestandlogo.png"
//           alt="Lemonade Stand Logo"
//         />
//         <a href="/"></a>
//       </div>
//       <div className="search-bar">
//         <Search click={props.search} />
//       </div>

//       <div className="spacer" />
//       <div className="navbar_navigation-items">
//         <ul>
//           <li>
//             <a href="/Contact">About</a>
//           </li>
//           <li>
//             <a href="/Contact">Contact</a>
//           </li>
//           <li>
//             <a href="/Cart">Cart</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </header>
// );
// export default navbar;
