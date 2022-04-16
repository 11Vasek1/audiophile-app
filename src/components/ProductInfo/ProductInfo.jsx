import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import InputNumber from '../UI/InputNumber';
import Button from '../UI/Button';
import useProductCounter from '../../Hooks/useProductCounter';
import { getDevice, formatPrice } from '../../utils';

import './ProductInfo.scss';

function ProductInfo({ product }) {
  const {
    name, image, new: isNew, description, price,
  } = product;
  const { count, increment, decrement } = useProductCounter(1);
  const dispatch = useDispatch();

  const imageSrc = image[getDevice()];

  const onProductAdd = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <div className="card-info">
      <img
        src={`../../${imageSrc}`}
        alt={name}
        className="card-info-image card-info__image"
      />
      <div className="card-info-content card-info__content">
        {isNew && (
          <p className="subtitle subtitle--orange card-ifo-content__subtitle">
            NEW PRODUCT
          </p>
        )}
        <h2 className="card-info-content__title">{name}</h2>
        <p>{description}</p>
        <p className="h6 product-info__price">{formatPrice(price)}</p>
        <div className="product-info__store">
          <InputNumber
            count={count}
            increment={increment}
            decrement={decrement}
          />
          <Button onClick={() => onProductAdd({ ...product, quantity: count })}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

export { ProductInfo };
