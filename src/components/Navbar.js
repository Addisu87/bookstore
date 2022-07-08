import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar">
    <h1>
      <Link to="/" className="logo">
        Bookstore CMS
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/books">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
      <FaUser className="userPic" type="icon" />
    </ul>
  </nav>
);

export default Navbar;
