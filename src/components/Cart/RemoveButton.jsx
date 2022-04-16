import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllProduct } from '../../redux/cartSlice';

import './Cart.scss';

function RemoveButton() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <button
      className="cart__remove"
      type="button"
      onClick={() => dispatch(removeAllProduct(cart))}
    >
      Remove all
    </button>
  );
}

export default RemoveButton;
