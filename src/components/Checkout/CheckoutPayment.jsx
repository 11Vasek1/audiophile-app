import React from 'react';
import CheckoutCheckbox from './CheckoutCheckbox';
import CheckoutInput from './CheckoutInput';

import './Checkout.scss';

function CheckoutPayment(props) {
  const { register, required, errors, watch } = props;
  const paymentType = watch('payment');
  return (
    <>
      <div className="payment">
        <p className="payment__title checkout-input-title">Payment Method:</p>
        <div className="payment__box">
          <CheckoutCheckbox
            value="e-Money"
            register={register}
            required={required}
            errors={errors}
            watch={watch}
            name="payment"
          />
          <CheckoutCheckbox
            value="Cash on Delivery"
            register={register}
            required={required}
            errors={errors}
            watch={watch}
            name="payment"
          />
        </div>
      </div>
      {paymentType === 'e-Money' && (
        <CheckoutInput
          label="e-Money Number"
          placeholder="238521993"
          errors={errors}
          register={register}
          required="Field is required"
        />
      )}
      {paymentType === 'e-Money' && (
        <CheckoutInput
          label="e-Money PIN"
          placeholder="6891"
          errors={errors}
          register={register}
          required="Field is required"
        />
      )}
      {paymentType === 'Cash on Delivery' && (
        <div className="delivery">
          <img
            className="delivery__img"
            src={'../../../assets/shared/desktop/delivery.svg'}
            alt="delivery"
          />
          <p className="delivery__text">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </>
  );
}

export default CheckoutPayment;
