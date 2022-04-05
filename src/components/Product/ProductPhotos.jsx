import React from 'react';
import { getDevice } from '../../utils';
import './ProductPhotos.scss';

function getArray(obj) {
  return [obj.first, obj.second, obj.third];
}

function ProductPhotos({ gallery }) {
  const device = getDevice();

  const photos = getArray(gallery)
    .map((photoObj) => photoObj[device])
    .map((url, index) => (
      <img
        key={index}
        src={'../../' + url}
        className={`product-gallery__img product-gallery__img${index}`}
      />
    ));

  return <div className="product-gallery">{photos}</div>;
}

export default ProductPhotos;
