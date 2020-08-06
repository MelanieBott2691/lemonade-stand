import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import PrivateRoute from './components/private-route/PrivateRoute';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Cart from './pages/Cart.js';
import Profile from './pages/Profile.js';
import CreateStore from './pages/CreateStore.js';
import StoreItem from './components/Store/StoreItem.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';
import Store from './pages/Store';
import About from './pages/About';
import Footer from './components/Footer/Footer.js';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './login';
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/shoppingcart" component={ShoppingCart} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/createstore" component={CreateStore} />
            <Route exact path="/storeitem" component={StoreItem} />
            <Route exact path="/storetest" component={Store} />
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
            <Footer />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
