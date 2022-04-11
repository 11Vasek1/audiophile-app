import React from 'react';
import GoBack from '../GoBack/GoBack';
import Spacer from '../Spacer';
import CheckoutForm from './CheckoutForm';

import './Checkout.scss';

function Checkout() {
  return (
    <div className="checkout">
      <div className="container">
        <Spacer
          space={{
            mobile: 16,
            tablet: 32,
            desktop: 80,
          }}
        />
        <GoBack />
        <CheckoutForm />
      </div>
      <Spacer
        space={{
          mobile: 97,
          tablet: 116,
          desktop: 140,
        }}
      />
    </div>
  );
}

export default Checkout;
