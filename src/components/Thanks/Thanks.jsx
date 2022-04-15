import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAllProduct } from '../../redux/cartSlice';
import ThanksCart from './ThanksCart';
import { Button, Spacer } from '..';

import './Thanks.scss';

function Thanks() {
  const dispatch = useDispatch();
  function handleBackHomeClick() {
    dispatch(removeAllProduct());
  }

  return (
    <div className="thanks">
      <img
        className="thanks__icon thanks-icon"
        src="../../../assets/icon/thanks-icon.svg"
      />
      <p className="h3 thanks__title">THANK YOU FOR YOUR ORDER</p>
      <p className="thanks__text">
        You will receive an email confirmation shortly.
      </p>
      <Spacer
        space={{
          mobile: 24,
          tablet: 46,
          desktop: 46,
        }}
      >
        <ThanksCart />
      </Spacer>
      <Link to={'/'}>
        <Button className="cart__checkout" onClick={handleBackHomeClick}>
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}

export default Thanks;
