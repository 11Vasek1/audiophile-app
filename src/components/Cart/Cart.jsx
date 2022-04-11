import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  cartCountSelector,
  cartValueSelector,
  removeAllProduct,
} from '../../store/cartSlice';
import Button from '../UI/Button';
import CartItem from './CartItem';
import { formatPrice } from '../../utils';

import './Cart.scss';

export default function Cart(props) {
  const { summary, isValid, setModalOpen, isModalOpen } = props;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const cartCount = useSelector(cartCountSelector);
  const totalPrice = useSelector(cartValueSelector);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
    document.body.style.overflow = 'hidden';
  }, [isModalOpen]);

  const title = summary ? 'summary' : `cart(${cartCount})`;
  const button = createButton(summary);
  const total = getTotalElements();

  function getTotalElements() {
    if (!summary) {
      return (
        <div className="cart-total">
          <p>TOTAL</p>
          <p className="h6">{formatPrice(totalPrice)}</p>
        </div>
      );
    }
    return (
      <>
        <div className="cart-total cart__total">
          <p>TOTAL</p>
          <p className="h6">$ 5,396</p>
        </div>
        <div className="cart-total cart__total">
          <p>SHIPPING</p>
          <p className="h6">$ 50</p>
        </div>
        <div className="cart-total cart__total">
          <p>VAT (INCLUDED)</p>
          <p className="h6">$ 1,079</p>
        </div>
        <div className="cart-total cart__big-total">
          <p>GRAND TOTAL</p>
          <p className="h6 h6--orange">$ 5,446</p>
        </div>
      </>
    );
  }

  function createButton(summary) {
    if (summary) {
      return (
        <Button className="cart__checkout" type="submit" disabled={!isValid}>
          CONTINUE & PAY
        </Button>
      );
    }
    return (
      <Link to="checkout">
        <Button className="cart__checkout" onClick={() => setModalOpen(false)}>
          checkout
        </Button>
      </Link>
    );
  }

  return (
    <div className="cart">
      <div className="cart__head">
        <p className="h6">{title}</p>
        {!summary && cart.length > 0 && (
          <button
            className="cart__remove"
            onClick={() => dispatch(removeAllProduct(cart))}
          >
            Remove all
          </button>
        )}
      </div>
      {cart.length === 0 && (
        <p className="cart__no-item">
          You have not added any product to your cart yet.
        </p>
      )}
      {cart.length > 0 && (
        <>
          <div className="cart__inner">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} summary={summary} />
            ))}
          </div>
          <div className="cart__total-box">{total}</div>
          {button}
        </>
      )}
    </div>
  );
}
