import React from 'react';
import { useWatch } from 'react-hook-form';
import CheckoutCheckbox from './CheckoutCheckbox';
import Input from '../UI/Input';

import './Checkout.scss';

const PAYMENT_TYPE = {
  CASH: 'Cash on Delivery',
  E_MONEY: 'e-Money',
};

function CheckoutPayment(props) {
  const { content, register, required, errors, control } = props;
  const paymentType = useWatch({
    control,
    name: 'payment',
  });
  return (
    <>
      <div className="payment">
        <p className="payment__title checkout-input-title">Payment Method:</p>
        <div className="payment__box">
          {content.map((data) => {
            return (
              <CheckoutCheckbox
                key={data.id}
                type={data.type}
                value={data.value}
                name={data.name}
                register={register}
                required={required}
                errors={errors}
              />
            );
          })}
        </div>
      </div>

      {paymentType === PAYMENT_TYPE.E_MONEY && (
        <div className="payment__money">
          <div className="payment__money-number">
            <Input
              className="payment__type"
              label="e-Money Number"
              placeholder="238521993"
              errors={errors}
              register={register}
              required="Field is required"
            />
          </div>
          <div className="payment__money-pin">
            <Input
              label="e-Money PIN"
              placeholder="6891"
              errors={errors}
              register={register}
              required="Field is required"
            />
          </div>
        </div>
      )}

      {paymentType === PAYMENT_TYPE.CASH && (
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
