import React from 'react';
import Input from '../UI/Input';
import CheckoutInput from './CheckoutInput';
import './Checkout.scss';

function CheckoutCheckbox(props) {
  const { value, required, errors, register, name } = props;
  //const paymentType = watch('payment');
  //console.log(paymentType === 'e-Money');

  return (
    <>
      <label className="payment__label">
        <span className="payment__text">{value}</span>
        <Input
          className="payment__input"
          type="radio"
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
      {/*{
        (paymentType === 'e-Money' && (
          <CheckoutInput
            label="e-Money Number"
            placeholder="238521993"
            errors={errors}
            register={register}
            required="Field is required"
            //key={9}
          />
        ),
        (
          <CheckoutInput
            label="e-Money PIN"
            placeholder="6891"
            errors={errors}
            register={register}
            required="Field is required"
            //key={10}
          />
        ))
      }*/}
    </>
  );
}

export default CheckoutCheckbox;
