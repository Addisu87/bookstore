import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">
        <a href="/">Bookstore CMS</a>
      </h2>

      <ul className="nav-links">
        {links.map((link) => (
          <li className="nav-link" key={link.id}>
            <NavLink to={link.path} exact="true">
              {link.text}
            </NavLink>
          </li>
        ))}
        <FaUser className="userPic" type="icon" />
      </ul>
    </nav>
  );
};

export default Navbar;
