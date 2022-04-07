import React from 'react';
import Button from '../UI/Button';
import './Cart.scss';
import CartItem from './CartItem';

export default function Cart(props) {
  return <div className='cart'>
    <div className="cart__head">
      <p className="h6">cart (3)</p>
      <p className='cart__remove'>Remove all</p>
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

    <Button children="checkout" className="cart__checkout"/>
  </div>;
}
