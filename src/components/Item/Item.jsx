import React from 'react';
import Button from '../UI/Button';
import { formatImgSrc, getDevice } from '../../utils';

import '../../scss/App.scss';
import './Item.scss';

export default function Item(props) {
  const { details } = props;
  console.log(details.image);
  const imageSrc = formatImgSrc(details.image[getDevice()]);

  console.log(imageSrc);
  return (
    <>
      <li className="item">
        <img
          className="item__img"
          src={`../${details.image.desktop}`}
          alt={`${details.name} image`}
        />
        <div className="item__box">
          {details.new === true && (
            <div className="overline item__subtitle">New product</div>
          )}
          <div className="item__title">{details.name}</div>
          <div className="item__description">{details.description}</div>
          <Button className="button">See Product</Button>
        </div>
      </li>
    </>
  );
}
