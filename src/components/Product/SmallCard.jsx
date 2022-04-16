import React from 'react';
import { Link } from 'react-router-dom';
import { getDevice } from '../../utils';
import Button from '../UI/Button';

import './Product.scss';

function SmallCard({ other }) {
  const image = other.image[getDevice()];

  const category = () => {
    const arr = other.slug.split('-');
    return arr[arr.length - 1];
  };

  return (
    <div className="small-card">
      <img
        className="small-card__image"
        src={`../../${image}`}
        alt={other.name}
      />
      <h4 className="h4 small-card__title">{other.name}</h4>
      <Link to={`/items/${category()}/${other.slug}`}>
        <Button>See Product</Button>
      </Link>
    </div>
  );
}

export default SmallCard;
