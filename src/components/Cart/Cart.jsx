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

export default function Cart({summary = false}) {
  const title = summary ? "summary" : `cart (3)`;
  const button = summary ? "CONTINUE & PAY" : `checkout`;
  const total = getTotalElements(summary)

  return <div className='cart'>
    <div className="cart__head">
      <p className="h6">{title}</p>
      (summary && <p className='cart__remove'>Remove all</p>)
    </div>

    <div className="cart__content">
      <CartItem summary={summary} />
      <CartItem summary={summary} />
      <CartItem summary={summary} />
    </div>
    <div className="cart__total-box">
      {total}
    </div>

    <Button children={button} className="cart__checkout"/>
  </div>;
}
