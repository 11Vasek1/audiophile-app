import React from 'react';
import InputNumber from '../UI/inputNumber';
import './CartItem.scss';

export default function CartItem({summary}) {

    const cartItemRight = (summary ? <p><b>x1</b></p>:<InputNumber/>)


    return <div className='cart-item'>
        <div className="cart-item__product">
            <img src="" alt="" className="cart-item__image" />
            <div className="cart-item__text">
                <p className="h6 cart-item__title">name</p>
                <p>$ 2,999</p>
            </div>
        </div>
        {cartItemRight}
    </div>;
}