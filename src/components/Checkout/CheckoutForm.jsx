import React from 'react';
import './CheckoutForm.scss';
import CheckoutInput from './CheckoutInput';
import CheckoutPayment from './CheckoutPayment';
import CheckoutStep from './CheckoutStep';

const content = [
  {
    title: 'Billing Details',
    childrens: [
      <CheckoutInput
        title="Name"
        placeholder="Alexei"
        key={0}
      />,
      <CheckoutInput
        title="Email Address"
        placeholder="alexei@mail.com"
        key={1}
      />,
      <CheckoutInput
        title="Phone Number"
        placeholder="+1 202-555-0136"
        key={2}
      />
    ]
  },

  {
    title: 'shipping info',
    childrens: [
      <CheckoutInput
        title="Address"
        placeholder="1137 Williams Avenue"
        doubled
        key={0}
      />,
      <CheckoutInput
        title="ZIP Code"
        placeholder="10001"
        key={1}
      />,
      <CheckoutInput
        title="City"
        placeholder="New York"
        key={2}
      />,
      <CheckoutInput
        title="Country"
        placeholder="United States"
        key={3}
      />
    ]
  },

  {
    title: 'payment details',
    childrens: [
      <div 
        className='checkout-step__long'
        key={0}>
        <CheckoutPayment />
      </div>,
      <CheckoutInput
        title="e-Money Number"
        placeholder="238521993"
        key={1}
      />,
      <CheckoutInput
        title="e-Money PIN"
        placeholder="6891"
        key={2}
      />
    ]
  },
]


function CheckoutForm(){
    return(
        <div className="checkout-form">
            <h3 className="h3 checkout__h3">CHECKOUT</h3>

            <div className="checkout-steps">
              {content.map( (step, index) => <CheckoutStep key={index} title={step.title} content={step.childrens} /> )}
            </div>

          </div>
    )
}

export default CheckoutForm