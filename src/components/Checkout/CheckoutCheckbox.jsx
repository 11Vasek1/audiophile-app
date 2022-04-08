import React from 'react';
import './CheckoutCheckbox.scss'

function CheckoutCheckbox({text}){

    return(
        <label className="payment__label">
            <span className="payment__text">{text}</span>
            <input className="payment__input" type="radio" name="payment" />
            <span className="payment__radio">
            <span></span>
            </span>
        </label>
    )
}

export default CheckoutCheckbox