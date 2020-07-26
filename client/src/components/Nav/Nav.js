import React from 'react'
import './Nav.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import Search from '../Search/Search'

const navbar = props => (
  <header className='navbar'>
    <nav className='navbar__navigation'>
      <div className='navbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='navbar__logo'>
        <img
          src='../../assets/images/lemonadestandlogo.png'
          alt='Lemonade Stand Logo'
        />
        <a href='/'></a>
      </div>
      <div className='search-bar'>
        <Search click={props.search} />
      </div>

      <div className='spacer' />
      <div className='navbar_navigation-items'>
        <ul>
          <li>
            <a href='/Contact'>About</a>
          </li>
          <li>
            <a href='/Contact'>Contact</a>
          </li>
          <li>
            <a href='/Cart'>Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)
export default navbar

// import Search from '../Search/Search'

// export default function Nav () {
//   return (
//     <nav className='navbar' id='navBar'>
// <ul>
//   <a className='navbar-brand brand' href='/'>
//     Lemonade Stand
//   </a>
//   <a className='navbar-brand contact' href='/contact'>
//     Contact
//   </a>
//   <a className='navbar-brand profile' href='/saved'>
//     Profile
//   </a>
//   <a className='navbar-brand cart' href='/cart'>
//     Cart
//   </a>
//   <a href='javascript:void(0);' class='icon' onclick='myFunction()'>
//     <i class='fa fa-bars'></i>
//   </a>
// </ul>
//       <Search />
//     </nav>
//   )
// }
