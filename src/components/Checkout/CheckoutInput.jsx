import React from 'react';
import Input from '../UI/Input';

import clsx from 'clsx';
import './Checkout.scss';

function CheckoutInput(props) {
  const {
    label,
    errors,
    register,
    required,
    placeholder,
    double = false,
  } = props;
  const className = clsx('checkout-input', {
    'checkout-input--doubled': double,
  });

  return (
    <div className={className}>
      <Input
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
