import React from 'react';
import './ThanksItem.scss';

import { formatPrice } from '../../utils';

function ThanksItem({ className, product }) {
  return (
    <div className={`thanks-item ${className}`}>
      <div className="thanks-item__left">
        <img src={product.image.desktop} className="thanks-item__image" />
        <div className="thanks-item__text">
          <p className="thanks-item__title">{product.name}</p>
          <p>{formatPrice(product.price)}</p>
        </div>
      </div>
      <p className="thanks-item__count">x{product.quantity}</p>
    </div>
  );
}

export default ThanksItem;
