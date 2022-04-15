import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { openThanksModal, useThanksModalOpen } from '../../redux/modalSlice';
import CheckoutInput from './CheckoutInput';
import CheckoutPayment from './CheckoutPayment';
import CheckoutStep from './CheckoutStep';
import Cart from './../Cart/Cart';
import Modal from '../Modal/Modal';
import Thanks from '../Thanks/Thanks';

import './Checkout.scss';
import '../Modal/Modal.scss';

function CheckoutForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();
  const isModalOpen = useThanksModalOpen();

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
          <CheckoutPayment
            errors={errors}
            register={register}
            watch={watch}
            required="Field is required"
          />
        </div>,
      ],
    },
  ];

  function onSubmitForm() {
    dispatch(openThanksModal());
    reset();
  }

  return (
    <>
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
      {isModalOpen && (
        <Modal className="modal__container--thanks">
          <Thanks />
        </Modal>
      )}
    </>
  );
}

export default CheckoutForm;
