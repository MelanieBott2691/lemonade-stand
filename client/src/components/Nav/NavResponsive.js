import React from 'react'
import './Nav.css'
// import Nav from '../Nav/Nav'

function myFunction () {
  const x = document.getElementById('navBar')
  if (x.className === 'navbar') {
    x.className += ' responsive'
  } else {
    x.className = 'navbar'
  }
}
export default myFunction

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

// export default App
