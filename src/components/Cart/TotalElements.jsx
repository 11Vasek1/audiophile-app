import React from 'react';
import { useSelector } from 'react-redux';
import { cartValueSelector } from '../../redux/cartSlice';
import { formatPrice } from '../../utils';

import './Cart.scss';

const SHIPPING = 50;

export default function TotalElements({ summary }) {
  const totalPrice = useSelector(cartValueSelector);
  const VAT = Number.parseFloat((totalPrice * 0.2).toFixed(2));
  const grandTotal = totalPrice + SHIPPING + VAT;

  if (!summary) {
    return (
      <div className="cart-total">
        <p>TOTAL</p>
        <p className="h6">{formatPrice(totalPrice)}</p>
      </div>
    );
  }

  return (
    <>
      <div className="cart-total cart__total">
        <p>TOTAL</p>
        <p className="h6">{formatPrice(totalPrice)}</p>
      </div>
      <div className="cart-total cart__total">
        <p>SHIPPING</p>
        <p className="h6">{formatPrice(SHIPPING)}</p>
      </div>
      <div className="cart-total cart__total">
        <p>VAT (INCLUDED)</p>
        <p className="h6">{formatPrice(VAT)}</p>
      </div>
      <div className="cart-total cart__big-total">
        <p>GRAND TOTAL</p>
        <p className="h6 h6--orange">{formatPrice(grandTotal)}</p>
      </div>
    </>
  );
}
