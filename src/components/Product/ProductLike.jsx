import React from 'react';
import './ProductLike.scss';
import SmallCard from './SmallCard';

function ProductLike({ others }) {
  const className = 'product-like ';

  const cards = others.map((product, index) => (
    <SmallCard key={index} product={product} />
  ));

  return (
    <div className={className}>
      <h3 className="h3 product-like__title">you may also like</h3>
      <div className="product-like__cards">{cards}</div>
    </div>
  );
}

export default ProductLike;
