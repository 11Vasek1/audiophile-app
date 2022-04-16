import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { openThanksModal, useThanksModalOpen } from '../../redux/modalSlice';
import CheckoutPayment from './CheckoutPayment';
import CheckoutStep from './CheckoutStep';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import Thanks from '../Thanks/Thanks';
import { FORM_DATA, FORM_RADIO_DATA } from './FormData';

import './Checkout.scss';
import '../Modal/Modal.scss';

function CheckoutForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();
  const isModalOpen = useThanksModalOpen();

  function onSubmit() {
    dispatch(openThanksModal());
    reset();
  }

  return (
    <>
      <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="checkout__box">
          <h3 className="h3 checkout__h3">CHECKOUT</h3>
          <div className="checkout-steps">
            {FORM_DATA.map((data) => (
              <CheckoutStep
                key={data.id}
                title={data.title}
                content={data.content}
                errors={errors}
                register={register}
                required="Field is required"
              />
            ))}
            {FORM_RADIO_DATA.map((data) => (
              <CheckoutPayment
                key={data.id}
                title={data.title}
                content={data.content}
                errors={errors}
                register={register}
                control={control}
                required="Field is required"
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
