import React from 'react';
import CheckoutCheckbox from './CheckoutCheckbox';
import './CheckoutPayment.scss';

function CheckoutPayment() {
  return (
    <div className="payment">
      <p className="payment__title checkout-input-title">Payment Method:</p>
      <div className="payment__box">
        <CheckoutCheckbox text="e-Money" />
        <CheckoutCheckbox text="Cash on Delivery" />
      </div>
    </div>
  );
}

export default CheckoutPayment;
