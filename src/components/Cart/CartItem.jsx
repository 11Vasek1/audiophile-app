import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/cartSlice';
import InputNumber from '../UI/InputNumber';
import { fixProductName, formatPrice } from '../../utils';
import useProductCounter from '../../Hooks/useProductCounter';

import './CartItem.scss';

export default function CartItem(props) {
  const { summary, product } = props;
  const { count, increment, decrement } = useProductCounter(product.quantity);
  const dispatch = useDispatch();
  const cartItemRight = summary ? (
    <p>
      <b>x{count}</b>
    </p>
  ) : (
    <div className="cart-item__box">
      <InputNumber
        count={count}
        increment={increment}
        decrement={decrement}
        product={product}
      />
      <button
        className="cart-item__delete"
        onClick={() => dispatch(removeProduct(product))}
      >
        <img
          src={'../../../assets/shared/desktop/close-icon.svg'}
          alt="delete"
        />
      </button>
    </div>
  );

  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <img
          src={`../../../assets/cart/image-${product.slug}.jpg`}
          alt={product.name}
          className="cart-item__image"
        />
        <div className="cart-item__text">
          <p className="h6 cart-item__title">{fixProductName(product.name)}</p>
          <p>{formatPrice(product.price)}</p>
        </div>
      </div>
      {cartItemRight}
    </div>
  );
}
