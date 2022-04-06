import React from 'react';
import Spacer from '../Spacer';
import styles from './About.module.scss';
import AboutImg from '../../../assets/shared/desktop/image-best-gear.jpg';
import AboutGpg from '../../../assets/shared/tablet/image-best-gear.jpg';

export default function About() {
  const space = { mobile: 120, tablet: 120, desktop: 200 };
  return (
    <Spacer space={space}>
      <div className={styles.about}>
        <img
          className={styles.about__img}
          src={AboutImg}
          alt="listening music image"
        />
        <img
          className={styles.about__image}
          src={AboutGpg}
          alt="listening music image"
        />
        <div className={styles.about__info}>
          <h3 className={styles.about__title}>
            Bringing you the <span>best</span> audio gear
          </h3>
          <p className={styles.about__text}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </Spacer>
  );
}
