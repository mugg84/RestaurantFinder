import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = ({ className }) => {
  const classes = className
    .split(' ')
    .map((singleClass) => styles[singleClass])
    .join(' ');

  return (
    <nav className={classes}>
      <p className={styles.logo__big}>
        <i className="fas fa-pizza-slice"></i>FoodFinder
      </p>
      <p className={styles.logo__small}>
        <i className="fas fa-pizza-slice"></i>
      </p>
      <ul className={styles.icon}>
        <li className={styles.icon__big}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.icon__big}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.icon__small}>
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li className={styles.icon__small}>
          <Link to="/about">
            <i className="fas fa-info-circle"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
