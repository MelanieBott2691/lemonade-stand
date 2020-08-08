import './Nav.css';
import logo from '../Nav/logo.png';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navigation extends React.Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    let register;
    let login;
    let logout;
    let cart;
    let profile;
    if (!this.props.auth.isAuthenticated) {
      register = (
        <a className="dropdown-item" href="/register">
          Register
        </a>
      );
      login = (
        <a className="dropdown-item" href="/login">
          Sign In
        </a>
      );
    } else {
      logout = (
        <a className="dropdown-item" href="/" onClick={this.onLogoutClick}>
          Logout
        </a>
      );
      profile = (
        <a className="dropdown-item" href="/profile">
          Profile
        </a>
      );
      cart = (
        <a className="dropdown-item" href="/shoppingcart">
          Shopping Cart
        </a>
      );
    }

    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="logo"
              className="nav-image"
              width="100"
              height="120"
            />
          </a>
          <button
            className="navbar-toggler btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </button>
          {/* Dropdown */}

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Menu
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {login}
                  {logout}
                  {register}
                  {profile}
                  <div className="dropdown-divider"></div>
                  {cart}
                  <a className="dropdown-item" href="/contact">
                    Contact
                  </a>
                  <a className="dropdown-item" href="/about">
                    About
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={this.props.Search}
                onChange={this.props.handleInputChange}></input>

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.props.handleFormSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
