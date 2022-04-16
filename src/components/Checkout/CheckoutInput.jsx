import React from 'react';
import Input from '../UI/Input';

import clsx from 'clsx';
import './Checkout.scss';

function CheckoutInput(props) {
  const { type, label, placeholder, errors, register, required, double } =
    props;
  const className = clsx('checkout-input', {
    'checkout-input--doubled': double,
    'checkout-input--type': label === 'e-Money Number',
  });

  return (
    <div className={className}>
      <Input
        type={type}
        placeholder={placeholder}
        label={label}
        errors={errors}
        register={register}
        required={required}
      />
    </div>
  );
}

export default CheckoutInput;
