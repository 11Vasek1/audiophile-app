import React from 'react';
import Button from '../UI/Button';
import '../../scss/App.scss';

export default function Item(props) {
  const { details } = props;
  return (
    <div className="item">
      <img
        className="item__img"
        src={details.image.desktop}
        alt={`${details.name} image`}
      />
      <div className="item__box">
        {details.new === true && (
          <div className="overline item__subtitle">New product</div>
        )}
        <div className="item__title">{details.name}</div>
        <div className="item description">{details.description}</div>
        <Button>See Product</Button>
      </div>
    </div>
  );
}
