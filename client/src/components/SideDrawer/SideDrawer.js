import React from 'react'
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className='side-drawer'>
      <ul>
        <li>
          <a href='/Contact'></a>
        </li>
        <li>
          <a href='/Profile'></a>
        </li>
        <li>
          <a href='/Cart'></a>
        </li>
      </ul>
    </nav>
  )
}
export default sideDrawer
