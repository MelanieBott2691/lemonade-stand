import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './pages/Home.js'
// import Contact from './pages/Contact.js'
// import Cart from './components/Cart/Cart.js'
// import Cart from './pages/cart/Cart.js'
import Nav from './components/Nav/Nav'
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

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <main style={{ marginTop: '64px' }}>
          <p>Search Bar Here</p>
        </main>
      </div>
    )
  }
}
export default App
