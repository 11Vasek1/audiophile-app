import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { cartCountSelector } from '../../store/cartSlice';

import styles from './Navbar.module.scss';
import LogoSvg from '../../../assets/shared/desktop/logo.svg';
import CartSvg from '../../../assets/shared/desktop/icon-cart.svg';

export default function Navbar({ setModalOpen }) {
  const [isMenuActive, setMenuActive] = useState(false);
  const cartCount = useSelector(cartCountSelector);

  const classes = ({ isActive }) =>
    clsx({
      [styles.active]: isActive,
      [styles.menu__link]: true,
    });

  const classesNavbar = clsx(styles.navbar__box, {
    [styles.navbarActive]: isMenuActive,
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={classesNavbar}>
          <button
            className={styles.menu__btn}
            type="button"
            onClick={() => setMenuActive(!isMenuActive)}
          >
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
            <li
              className={styles.menu__item}
              onClick={() => setMenuActive(false)}
            >
              <NavLink to="/" className={classes}>
                Home
              </NavLink>
            </li>
            <li
              className={styles.menu__item}
              onClick={() => setMenuActive(false)}
            >
              <NavLink to="/items/headphones" className={classes}>
                HEADPHONES
              </NavLink>
            </li>
            <li
              className={styles.menu__item}
              onClick={() => setMenuActive(false)}
            >
              <NavLink to="/items/speakers" className={classes}>
                SPEAKERS
              </NavLink>
            </li>
            <li
              className={styles.menu__item}
              onClick={() => setMenuActive(false)}
            >
              <NavLink to="/items/earphones" className={classes}>
                EARPHONES
              </NavLink>
            </li>
          </ul>
          <button className={styles.cart} onClick={() => setModalOpen(true)}>
            <img src={CartSvg} alt="cart icon" />
            <span className={styles.cart__count}>({cartCount})</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
