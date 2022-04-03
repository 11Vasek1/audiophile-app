import React from 'react';
import Button from '../UI/Button';
import clsx from 'clsx';

import styles from './NewProduct.module.scss';
import '../../scss/App.scss';

export default function NewProduct(props) {
  const { model, description } = props;
  const classes = clsx('overline', styles.subtitle);
  return (
    <div className={styles.newProduct}>
      <div className="container">
        <div className={styles.newProduct__about}>
          <h4 className={classes}>NEW PRODUCT</h4>
          <h1 className={clsx('h1', styles.title)}>{model}</h1>
          <p className={styles.newProduct__about_describe}>{description}</p>
          <Button className={styles.newProduct__btn}>See Product</Button>
        </div>
      </div>
    </div>
  );
}
