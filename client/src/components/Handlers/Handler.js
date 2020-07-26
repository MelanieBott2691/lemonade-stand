import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import 'bootstrap/dist/css/bootstrap.min.css'

class Handler extends Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Nav drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        {/* <main style={{ marginTop: '64px' }}>
          <p>Search Bar Here</p>
        </main> */}
      </div>
    )
  }
}
export default Handler
