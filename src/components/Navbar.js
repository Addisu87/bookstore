import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from './Navbar.module.css';

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
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>
        <a href="/">Bookstore CMS</a>
      </h2>

      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li className={styles.navLink} key={link.id}>
            <NavLink to={link.path} exact="true">
              {link.text}
            </NavLink>
          </li>
        ))}
        <div className={styles.userOval}>
          <FaUser className={styles.userPic} type="icon" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
