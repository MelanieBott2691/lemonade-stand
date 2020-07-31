import React, { Component } from 'react';
import './Nav.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Search from '../Search/Search';

// export default function Nav(props) {
export default class Nav extends Component {
  // state = {
  //   inputSearch: ''
  // };

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <header className="navbar">
        <nav className="navbar__navigation">
          <div className="navbar__toggle-button">
            <DrawerToggleButton click={this.drawerClickHandler} />
          </div>
          <div className="navbar__logo">
            <img
              src="../../assets/images/lemonadestandlogo.png"
              alt="Lemonade Stand Logo"
            />
            <a href="/"></a>
          </div>
          <div className="search-bar">
            <Search
              handleInputChange={this.props.handleInputChange}
              handleFormSubmit={this.props.handleFormSubmit}
              inputSearch={this.props.inputSearch}
            />
          </div>

          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <li>
                <a href="/Contact">About</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/Cart">Cart</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
