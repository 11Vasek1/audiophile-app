import React from 'react';
import { useSelector } from 'react-redux';
import { cartCountSelector } from '../../redux/cartSlice';
import RemoveButton from './RemoveButton';
import CreateButton from '../CreateButton/CreateButton';
import CartItem from './CartItem';
import TotalElements from './TotalElements';

import './Cart.scss';

export default function Cart(props) {
  const { summary, isValid } = props;
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = useSelector(cartCountSelector);
  const title = summary ? 'summary' : `cart(${cartCount})`;

  switch (cart.length) {
    case 0:
      return (
        <div className="cart">
          <div className="cart__head">
            <p className="h6">{title}</p>
            <p className="cart__no-item">
              You have not added any product to your cart yet.
            </p>
          </div>
        </div>
      );
    default:
      return (
        <div className="cart">
          <div className="cart__head">
            <p className="h6">{title}</p>
            <RemoveButton />
          </div>
          <div className="cart__inner">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} summary={summary} />
            ))}
          </div>
          <div className="cart__total-box">
            <TotalElements summary={summary} />
          </div>
          <CreateButton isValid={isValid} summary={summary} />
        </div>
      );
  }
}
