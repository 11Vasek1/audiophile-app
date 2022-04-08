import React, { useState, useEffect } from 'react';
import { Cart } from '..';
import GoBack from '../GoBack/GoBack';
import Spacer from '../Spacer';
import Input from '../UI/Input';

import './Checkout.scss'
import CheckoutForm from './CheckoutForm';
import CheckoutInput from './CheckoutInput';

function Checkout() {
  return (
    <div className='checkout'>
      <div className="container">
        <Spacer space={{
          mobile: 16,
          tablet: 32,
          desktop: 80,
        }}/>

        <Spacer space={{
          mobile: 24,
          tablet: 24,
          desktop: 56,
        }}>
          <GoBack />
        </Spacer>

        <div className="checkout-content">
          <div className="checkout-content__left">
            <CheckoutForm />
          </div>
          
          <div className="checkout-content__right checkout-summary">
            <Cart summary />
          </div>
        </div>

      </div>
      <Spacer space={{
          mobile: 97,
          tablet: 116,
          desktop: 140,
        }}/>
    </div>

  );
}

export default Checkout;
