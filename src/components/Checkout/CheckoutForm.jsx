import React from 'react';
import { useForm } from 'react-hook-form';
import CheckoutInput from './CheckoutInput';
import CheckoutPayment from './CheckoutPayment';
import CheckoutStep from './CheckoutStep';
import Cart from './../Cart/Cart';

import './Checkout.scss';

function CheckoutForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const content = [
    {
      title: 'Billing Details',
      children: [
        <CheckoutInput
          label="Name"
          placeholder="Alexei"
          errors={errors}
          register={register}
          required="Field is required"
          key={1}
        />,
        <CheckoutInput
          label="Email Address"
          type="email"
          placeholder="alexei@mail.com"
          errors={errors}
          register={register}
          required="Wrong format"
          key={2}
        />,
        <CheckoutInput
          label="Phone Number"
          type="tel"
          placeholder="+1 202-555-0136"
          errors={errors}
          register={register}
          required="Field is required"
          key={3}
        />,
      ],
    },

    {
      title: 'shipping info',
      children: [
        <CheckoutInput
          label="Address"
          placeholder="1137 Williams Avenue"
          errors={errors}
          register={register}
          required="Field is required"
          double
          key={4}
        />,
        <CheckoutInput
          label="ZIP Code"
          placeholder="10001"
          errors={errors}
          register={register}
          required="Field is required"
          key={5}
        />,
        <CheckoutInput
          label="City"
          placeholder="New York"
          errors={errors}
          register={register}
          required="Field is required"
          key={6}
        />,
        <CheckoutInput
          label="Country"
          placeholder="United States"
          errors={errors}
          register={register}
          required="Field is required"
          key={7}
        />,
      ],
    },

    {
      title: 'payment details',
      children: [
        <div className="checkout-step__long" key={8}>
          <CheckoutPayment />
        </div>,
        <CheckoutInput
          label="e-Money Number"
          placeholder="238521993"
          errors={errors}
          register={register}
          required="Field is required"
          key={9}
        />,
        <CheckoutInput
          label="e-Money PIN"
          placeholder="6891"
          errors={errors}
          register={register}
          required="Field is required"
          key={10}
        />,
      ],
    },
  ];

  function onSubmitForm(data) {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <form className="checkout__form" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="checkout__box">
        <h3 className="h3 checkout__h3">CHECKOUT</h3>
        <div className="checkout-steps">
          {content.map((step, index) => (
            <CheckoutStep
              key={index}
              title={step.title}
              content={step.children}
            />
          ))}
        </div>
      </div>
      <div className="checkout__content">
        <Cart summary isValid={isValid} />
      </div>
    </form>
  );
}

export default CheckoutForm;
