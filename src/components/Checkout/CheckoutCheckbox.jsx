import React from 'react';
import Input from '../UI/Input';

import './Checkout.scss';

function CheckoutCheckbox(props) {
  const { type, name, value, required, errors, register } = props;

  return (
    <>
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
        />
        <span className="payment__radio">
          <span></span>
        </span>
      </label>
    </>
  );
}

export default CheckoutCheckbox;
