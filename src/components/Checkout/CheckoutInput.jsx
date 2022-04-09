import React from 'react';
import Input from '../UI/Input';

import './CheckoutInput.scss';

function CheckoutInput({ title, placeholder, doubled = false }) {
  const className =
    'checkout-input' + (doubled ? ' checkout-input--doubled' : '');

  return (
    <div className={className}>
      <p className="checkout-input-title checkout-input__input">{title}</p>
      <Input placeholder={placeholder} />
    </div>
  );
}

export default CheckoutInput;
