import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { getDeviceForImage } from '../../utils';

import '../../scss/App.scss';
import './Item.scss';

export default function Item(props) {
  const { details } = props;
  const imageSrc = details.image[getDeviceForImage()];

  const productLink = `/items/${details.category}/${details.slug}`;

  return (
    <li className="item">
      <Link to={productLink}>
        <img
          className="item__img"
          src={`../${imageSrc}`}
          alt={`${details.name}`}
        />
      </Link>
      <div className="item__box">
        {details.new === true && (
          <div className="overline item__subtitle">New product</div>
        )}
        <div className="item__title">{details.name}</div>
        <div className="item__description">{details.description}</div>
        <Link to={productLink}>
          <Button className="button">See Product</Button>
        </Link>
      </div>
    </li>
  );
}
