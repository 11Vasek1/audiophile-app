import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDevice } from '../../utils';
import Button from '../UI/Button';
import './SmallCard.scss';

function SmallCard({ product }) {
  const image = product.image[getDevice()];

  const _product = useSelector(
    (store) => store.products?.products.slug[product.slug]
  );

  const link = `/items/${_product.category}/${_product.slug}`;

  return (
    <div className="small-card">
      <img className="small-card__image" src={'../../' + image} />
      <h4 className="h4 small-card__title">{product.name}</h4>
      <Link to={link}>
        <Button children={'See Product'} />
      </Link>
    </div>
  );
}

export default SmallCard;
