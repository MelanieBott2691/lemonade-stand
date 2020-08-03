import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
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
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/createstore" component={CreateStore} />
          <Route exact path="/storeitem" component={StoreItem} />
          <Route exact path="/storetest" component={Store} />
          <Footer />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
