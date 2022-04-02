import React from 'react';
import '../scss/App.scss';

function Test() {
  return (
    <>
      <button className="button_orange">See product</button>
      <button className="button_white">See product</button>
      <button className="button_arrow">Shop</button>

      <div>
        <input
          className="input_text"
          type="text"
          placeholder="enter your name"
        />
      </div>

      <div className="payment">
        <div className="payment__title">Payment Method:</div>
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

      <div className="number">
        <div className="number__field">
          <input
            className="number__input"
            type="number"
            defaultValue="1"
            min="1"
          />
        </div>
        <div className="number__spin minus"></div>
        <div className="number__spin plus"></div>
      </div>
    </>
  );
}

export default Test;
