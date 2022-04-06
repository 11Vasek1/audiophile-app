import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Spacer from '../Spacer.jsx';

import clsx from 'clsx';
import styles from './Categories.module.scss';

import HeadphonesPng from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakersPng from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesPng from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export default function Categories() {
  const space = { mobile: 95, tablet: 95, desktop: 165 };
  const classes = clsx(styles.categories__item, styles.item);
  return (
    <Spacer space={space}>
      <div className={styles.categories}>
        <div className={styles.categories__items}>
          <div className={classes}>
            <img
              className={styles.item__image}
              src={HeadphonesPng}
              alt="headphones image"
            />
            <h6 className={styles.item__title}>HEADPHONES</h6>
            <Link to="/items/headphones">
              <Button arrow>Shop</Button>
            </Link>
          </div>
          <div className={classes}>
            <img
              className={styles.item__image}
              src={SpeakersPng}
              alt="speakers image"
            />
            <h6 className={styles.item__title}>SPEAKERS</h6>
            <Link to="/items/speakers">
              <Button arrow>Shop</Button>
            </Link>
          </div>
          <div className={classes}>
            <img
              className={styles.item__image}
              src={EarphonesPng}
              alt="earphones image"
            />
            <h6 className={styles.item__title}>EARPHONES</h6>
            <Link to="/items/earphones">
              <Button arrow>Shop</Button>
            </Link>
          </div>
        </div>
      </div>
    </Spacer>
  );
}
