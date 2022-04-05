import React from 'react';
import { Link } from 'react-router-dom';
import { getDevice } from '../../utils';
import Button from '../UI/Button';
import './SmallCard.scss';

function SmallCard({ product }) {
  const device = getDevice();

  const image = product.image[device];

  return (
    <div className="small-card">
      <img className="small-card__image" src={'../../' + image} />
      <h4 className="h4 small-card__title">{product.name}</h4>
      <Link to={'/' + product.slug}>
        <Button children={'See Product'} />
      </Link>
    </div>
  );
}

export default SmallCard;
