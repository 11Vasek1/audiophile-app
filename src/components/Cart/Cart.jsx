import React from 'react';
import Button from '../UI/Button';
import InputNumber from '../UI/inputNumber';
import './Cart.scss';
import CartItem from './CartItem';

function getTotalElements(summary) {
  if (!summary) {
    return (
      <div className="cart-total">
        <p>TOTAL</p>
        <p className="h6">$ 5,396</p>
      </div>
    )
  }


  return (
    <>
      <div className="cart-total cart__total">
        <p>TOTAL</p>
        <p className="h6">$ 5,396</p>
      </div>
      <div className="cart-total cart__total">
        <p>SHIPPING</p>
        <p className="h6">$ 50</p>
      </div>
      <div className="cart-total cart__total">
        <p>VAT (INCLUDED)</p>
        <p className="h6">$ 1,079</p>
      </div>
      <div className="cart-total cart__big-total">
        <p>GRAND TOTAL</p>
        <p className="h6 h6--orange">$ 5,446</p>
      </div>
    </>
  )
}


export default function Cart(props) {
  return (
    <div className="cart">
      <div className="cart__head">
        <p className="h6">cart (3)</p>
        <p className="cart__remove">Remove all</p>
      </div>

      <div className="cart__content">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart__total">
        <p>TOTAL</p>
        <p className="h6">$ 5,396</p>
      </div>

      <Button children="checkout" className="cart__checkout" />
    </div>
  );
}
