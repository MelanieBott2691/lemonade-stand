import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import { Provider } from 'react-redux'
// import Navbar from './components/Navbar/Navbar'
import './App.css'

function App () {
  return (
    <Router>
      <Provider>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
