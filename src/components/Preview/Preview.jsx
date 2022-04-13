import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Spacer from '../Spacer';

import styles from './Preview.module.scss';
import SpeakersPng from '../../../assets/home/desktop/image-speaker-zx9.png';
import EarphonesImg from '../../../assets/home/desktop/image-earphones-yx1.jpg';

export default function Preview() {
  const space = { mobile: 95, tablet: 120, desktop: 200 };
  return (
    <Spacer space={space}>
      <div className={styles.preview}>
        <div className={styles.preview__items}>
          <div className={styles.item__big}>
            <img
              className={styles.item__big_img}
              src={SpeakersPng}
              alt="speakers image"
            />
            <div className={styles.item__big_about}>
              <h1 className={styles.item__big_title}>ZX9 SPEAKER</h1>
              <p className={styles.item__big_text}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/items/speakers/zx9-speaker">
                <Button className={styles.item__big_button}>See Product</Button>
              </Link>
            </div>
          </div>

          <div className={styles.item__medium}>
            <div className={styles.item__medium_about}>
              <h4 className={styles.item__medium_title}>ZX7 SPEAKER</h4>
              <Link to="/items/speakers/zx7-speaker">
                <Button outline className={styles.item__medium_button}>
                  See Product
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.item__small}>
            <img
              className={styles.item__small_img}
              src={EarphonesImg}
              alt="earphones image"
            />
            <div className={styles.item__small_about}>
              <h4 className={styles.item__small_title}>YX1 EARPHONES</h4>
              <Link to="/items/speakers/yx1-earphones">
                <Button outline className={styles.item__small_button}>
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Spacer>
  );
}
