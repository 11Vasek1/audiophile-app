import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import clsx from 'clsx';
import LogoSvg from '../../assets/shared/desktop/logo.svg';
import CartSvg from '../../assets/shared/desktop/icon-cart.svg';

export default function Navbar() {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const classes = ({ isActive }) => {
    return clsx({
      [styles.active]: isActive,
      [styles.menu__link]: true,
    });
  };

  const classesNavbar = clsx(styles.navbar, {
    [styles.navbarActive]: isActiveNav,
  });

  function handleToggle() {
    setIsActiveNav(!isActiveNav);
  }

  return (
    <nav className={classesNavbar}>
      <button className={styles.menu__btn} onClick={handleToggle}>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      </button>
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
          <NavLink to="/products/headphones" className={classes}>
            HEADPHONES
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/products/speakers" className={classes}>
            SPEAKERS
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/products/earphones" className={classes}>
            EARPHONES
          </NavLink>
        </li>
      </ul>
      <NavLink to="/cart" className={styles.cart__btn}>
        <img src={CartSvg} alt="cart icon" />
      </NavLink>
    </nav>
  );
}
