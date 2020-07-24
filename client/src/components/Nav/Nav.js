import React from 'react';
import './Nav.css';
import Search from '../Search/Search';

export default function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <a className="navbar-brand brand" href="/">
          Google Books
        </a>
        <a className="navbar-brand contact" href="/contact">
          Contact
        </a>
        <a className="navbar-brand saved" href="/saved">
          Saved
        </a>
      </ul>
      <Search />
    </nav>
  );
}
