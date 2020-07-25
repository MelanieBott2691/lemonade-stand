import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './pages/Home.js'
// import Contact from './pages/Contact.js'
// import Cart from './components/Cart/Cart.js'
// import Cart from './pages/cart/Cart.js'
import Carousel from './components/Carousel/Carousel'

import Nav from './components/Nav/Nav'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
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
export default App

// import Cart from './components/Cart/Cart.js'

// function App () {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/contact' component={Contact} />
//           {/* <Route exact path='/cart' component={Cart} /> */}
//           {/* <Route exact path="/books/:id" component={Detail} /> */}
//           {/* <Route component={NoMatch} /> */}
//         </Switch>
//       </div>
//     </Router>
//   )
// }
