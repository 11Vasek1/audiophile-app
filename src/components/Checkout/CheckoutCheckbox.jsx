import React from 'react';
import Input from '../UI/Input';

import './Checkout.scss';

function CheckoutCheckbox(props) {
  const {
    type, name, value, required, errors, register, control,
  } = props;

  return (
    <label className="payment__label">
      <span className="payment__text">{value}</span>
      <Input
        className="payment__input"
        type={type}
        name={name}
        value={value}
        errors={errors}
        register={register}
        required={required}
        control={control}
      />
      <span className="payment__radio">
        <span />
      </span>
    </label>
  );
}

export default CheckoutCheckbox;
