import React from 'react';
import SmallCard from './SmallCard';

import './Product.scss';

function ProductLike({ product }) {
  const { others } = product;

  return (
    <div className="product-like">
      <h3 className="h3 product-like__title">you may also like</h3>
      <div className="product-like__cards">
        {others.map((other, index) => <SmallCard key={index} other={other} />)}
      </div>
    </div>
  );
}

export default ProductLike;
