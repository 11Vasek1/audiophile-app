import React from 'react';
import Button from '../UI/Button';

import clsx from 'clsx';
import styles from './Categories.module.scss';

import HeadphonesPng from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakersPng from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesPng from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export default function Categories() {
  const classes = clsx(styles.categories__item, styles.item);
  return (
    <div className={styles.categories}>
      <div className={styles.categories__items}>
        <div className={classes}>
          <img
            className={styles.item__image}
            src={HeadphonesPng}
            alt="headphones image"
          />
          <h6 className={styles.item__title}>HEADPHONES</h6>
          <Button arrow>Shop</Button>
        </div>
        <div className={classes}>
          <img
            className={styles.item__image}
            src={SpeakersPng}
            alt="speakers image"
          />
          <h6 className={styles.item__title}>SPEAKERS</h6>
          <Button arrow>Shop</Button>
        </div>
        <div className={classes}>
          <img
            className={styles.item__image}
            src={EarphonesPng}
            alt="earphones image"
          />
          <h6 className={styles.item__title}>EARPHONES</h6>
          <Button arrow>Shop</Button>
        </div>
      </div>
    </div>
  );
}
