import React, { useState, useEffect } from 'react';
import { Cart } from '..';
import GoBack from '../GoBack/GoBack';
import Spacer from '../Spacer';
import Input from '../UI/Input';

import './Checkout.scss'
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
          <div className="checkout-content__left checkout-form">
            <h3 className="h3 checkout__h3">CHECKOUT</h3>

            <div className="checkout-steps">
              <div className="checkout-step">
                <p className="checkout-step__title subtitle subtitle--orange">Billing Details</p>
                <div className="checkout-step__content">
                  <CheckoutInput
                    title="Name"
                    placeholder="Alexei"
                  />
                  <CheckoutInput
                    title="Email Address"
                    placeholder="alexei@mail.com"
                  />
                  <CheckoutInput
                    title="Phone Number"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </div>
              <div className="checkout-step">
                <p className="checkout-step__title subtitle subtitle--orange">shipping info</p>
                <div className="checkout-step__content">
                  <CheckoutInput
                    title="Address"
                    placeholder="1137 Williams Avenue"
                    doubled
                  />
                  <CheckoutInput
                    title="ZIP Code"
                    placeholder="10001"
                  />
                  <CheckoutInput
                    title="City"
                    placeholder="New York"
                  />
                  <CheckoutInput
                    title="Country"
                    placeholder="United States"
                  />
                </div>
              </div>
              <div className="checkout-step">
                <p className="checkout-step__title subtitle subtitle--orange">payment details</p>
                <div className="checkout-step__content">
                  <div>
                    <div className="payment">
                      <p className="payment__title">Payment Method:</p>
                      <div className="payment__box">
                        <label className="payment__label">
                          <span className="payment__text">e-Money</span>
                          <input className="payment__input" type="radio" name="payment" />
                          <span className="payment__radio">
                            <span></span>
                          </span>
                        </label>
                        <label className="payment__label">
                          <span className="payment__text">Cash on Delivery</span>
                          <input className="payment__input" type="radio" name="payment" />
                          <span className="payment__radio">
                            <span></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <CheckoutInput
                    title="e-Money Number"
                    placeholder="238521993"
                  />
                  <CheckoutInput
                    title="e-Money PIN"
                    placeholder="6891"
                  />
                </div>
              </div>
            </div>

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
