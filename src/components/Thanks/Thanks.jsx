import React from 'react';
import './Thanks.scss';
import { Link } from 'react-router-dom';
import ThanksCart from './ThanksCart';

import { Button, Spacer } from '..';

function Thanks() {
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
        <Button className="cart__checkout" type="submit">
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}

export default Thanks;
