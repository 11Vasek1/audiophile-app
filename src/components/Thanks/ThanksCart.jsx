import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils';
import './ThanksCart.scss';
import ThanksItem from './ThanksItem';

function ThanksCart() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const items = cart.map((item, index) => (
    <ThanksItem className="thanks-items__item" product={item} key={index} />
  ));

  const content = isOpen ? items : items[0];
  const buttonSign = isOpen
    ? 'View less'
    : `and ${items.length - 1} other item(s)`;

  return (
    <div className="thanks-cart">
      <div className="thanks-items">
        <div className="thanks-items__grid">{content}</div>
        <div className="thanks-items__button" onClick={toggle}>
          {buttonSign}
        </div>
      </div>
      <div className="thanks-total">
        <p className="thanks-total__title">GRAND TOTAL</p>
        <p className="h6 h6--white">{formatPrice(5446)}</p>
      </div>
    </div>
  );
}

export default ThanksCart;
