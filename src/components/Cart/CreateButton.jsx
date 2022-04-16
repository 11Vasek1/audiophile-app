import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeCartModal } from '../../redux/modalSlice';
import Button from '../UI/Button';

import '../Checkout/Checkout.scss';

function CreateButton({ summary, isValid }) {
  const dispatch = useDispatch();

  if (summary) {
    return (
      <Button className="cart__checkout" type="submit" disabled={!isValid}>
        CONTINUE & PAY
      </Button>
    );
  }
  return (
    <Link to="checkout">
      <Button
        className="cart__checkout"
        onClick={() => dispatch(closeCartModal())}
      >
        CHECKOUT
      </Button>
    </Link>
  );
}

export default CreateButton;
