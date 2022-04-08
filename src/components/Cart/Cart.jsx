import React from 'react';
import { useSelector } from 'react-redux';
import { cartCountSelector, cartValueSelector } from '../../store/cartSlice';
import Button from '../UI/Button';
import CartItem from './CartItem';
import Modal from '../Modal/Modal';

import './Cart.scss';

function Cart(props) {
  const { summary, isModalOpen, setModalOpen } = props;
  const cart = useSelector((state) => state.cart);
  const cartCount = useSelector(cartCountSelector);
  const totalPrice = useSelector(cartValueSelector);

  const title = summary ? 'summary' : `cart(${cartCount})`;
  const button = summary ? 'CONTINUE & PAY' : 'checkout';
  const total = getTotalElements(summary);

  function getTotalElements() {
    if (!summary) {
      return (
        <div className="cart-total">
          <p>TOTAL</p>
          <p className="h6">
            $
            {totalPrice}
          </p>
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

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div className="cart">
        <div className="cart__head">
          <p className="h6">{title}</p>
          {!summary
            || (cart.length === 0 && <p className="cart__remove">Remove all</p>)}
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
                <CartItem
                  key={product.id}
                  product={product}
                  summary={summary}
                />
              ))}
            </div>
            <div className="cart__total-box">{total}</div>
            <Button className="cart__checkout">{button}</Button>
          </>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
