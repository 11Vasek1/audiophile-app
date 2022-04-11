import React from 'react';
import './Checkout.scss';

function CheckoutStep({ title, content }) {
  return (
    <div className="checkout-step">
      <p className="checkout-step__title subtitle subtitle--orange">{title}</p>
      <div className="checkout-step__content">{content}</div>
    </div>
  );
}

export default CheckoutStep;
