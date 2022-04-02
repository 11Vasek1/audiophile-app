import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import clsx from 'clsx';
import LogoSvg from '../../assets/shared/desktop/logo.svg';
import CartSvg from '../../assets/shared/desktop/icon-cart.svg';

export default function Navbar() {
  const classes = ({ isActive }) => {
    return clsx({
      [styles.active]: isActive,
      [styles.menu__link]: true,
    });
  };
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navbar__brand}>
        <img src={LogoSvg} alt="logo icon" />
      </NavLink>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <NavLink to="/" className={classes}>
            Home
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/headphones" className={classes}>
            HEADPHONES
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/speakers" className={classes}>
            SPEAKERS
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/earphones" className={classes}>
            EARPHONES
          </NavLink>
        </li>
      </ul>
      <NavLink to="/cart">
        <img src={CartSvg} alt="cart icon" />
      </NavLink>
    </nav>
  );
}
