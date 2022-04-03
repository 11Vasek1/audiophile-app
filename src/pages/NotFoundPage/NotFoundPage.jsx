import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../../../assets/shared/desktop/404.png';
import styles from './NotFoundPage.module.scss';
import './../../scss/App.scss';

export default function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <div className="container">
        <div className={styles.notFound__inner}>
          <div className={styles.notFound__content}>
            <h2 className={styles.notFound__title}>OOPS! Page Not Found!</h2>
            <p className={styles.notFound__text}>
              We're sorry but we can’t seem to find the pages you request. This
              might be because you have typed the web address not find
              incorrectly.
            </p>
            <Link to="/" className={styles.notFound__link}>
              GO HOME
            </Link>
          </div>
          <img className={styles.notFound__img} src={Img} alt="404 image" />
        </div>
      </div>
    </section>
  );
}
