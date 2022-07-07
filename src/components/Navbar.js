import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navLinks">
    <ul>
      <li>
        <Link to="/books">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
