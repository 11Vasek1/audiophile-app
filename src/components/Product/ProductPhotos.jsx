import React from 'react';
import { getDeviceForImage } from '../../utils';

import './Product.scss';

function getArray(obj) {
  return [obj.first, obj.second, obj.third];
}

function ProductPhotos({ product }) {
  const device = getDeviceForImage();

  const photos = getArray(product.gallery)
    .map((photoObj) => photoObj[device])
    .map((url, index) => (
      <img
        key={index}
        src={`../../${url}`}
        alt={product.name}
        className={`product-gallery__img product-gallery__img${index}`}
      />
    ));

  return <div className="product-gallery">{photos}</div>;
}

export default ProductPhotos;
