import React from 'react';
import clsx from 'clsx';
import Input from '../UI/Input';

import './Checkout.scss';

function CheckoutStep(props) {
  const { title, content, errors, register, required } = props;

  return (
    <div className="checkout-step">
      <p className="checkout-step__title subtitle subtitle--orange">{title}</p>
      <div className="checkout-step__content">
        {content.map((data) => {
          const className = clsx('checkout-input', {
            'checkout-input--doubled': data.double,
            'checkout-input--type': data.label === 'e-Money Number',
          });
          return (
            <div className={className} key={data.id}>
              <Input
                type={data.type}
                label={data.label}
                placeholder={data.placeholder}
                errors={errors}
                register={register}
                required={required}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckoutStep;
