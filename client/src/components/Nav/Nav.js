import React from 'react'
import './Nav.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const navbar = props => (
  <header className='navbar'>
    <nav className='navbar__navigation'>
      <div>
        <DrawerToggleButton />
      </div>
      <div className='navbar__logo'>
        <a href='/'>Lemonade Stand</a>
      </div>
      <div className='spacer'></div>
      <div className='navbar__navigation-items'>
        <ul>
          <li>
            <a className='navbar-brand contact' href='/contact'>
              Contact
            </a>
          </li>
          <li>
            <a className='navbar-brand profile' href='/saved'>
              Profile
            </a>
          </li>
          <li>
            <a className='navbar-brand cart' href='/cart'>
              Cart
            </a>
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
