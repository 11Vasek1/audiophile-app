import React from 'react';
import InputNumber from '../UI/InputNumber';
import { fixProductName } from '../../utils';
import useProductCounter from '../../Hooks/useProductCounter';

import './CartItem.scss';

// export default function CartItem({summary}) {

//     const cartItemRight = (summary ? <p><b>x1</b></p>:<InputNumber/>)


//     return <div className='cart-item'>
//         <div className="cart-item__product">
//             <img src="" alt="" className="cart-item__image" />
//             <div className="cart-item__text">
//                 <p className="h6 cart-item__title">name</p>
//                 <p>$ 2,999</p>
//             </div>
//         </div>
//         {cartItemRight}
//     </div>;
// }


export default function CartItem(props) {
  const { summary, product } = props;
  const { count, increment, decrement } = useProductCounter(product.quantity);
  const cartItemRight = (summary ? <p><b>x1</b></p>:<InputNumber
    count={count}
    increment={increment}
    decrement={decrement}
  />)

  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <img
          src={`../../../assets/cart/image-${product.slug}.jpg`}
          alt={product.name}
          className="cart-item__image"
        />
        <div className="cart-item__text">
          <p className="h6 cart-item__title">{fixProductName(product.name)}</p>
          <p>
            $
            {product.price}
          </p>
        </div>
      </div>
      {cartItemRight}
    </div>
  );
}
