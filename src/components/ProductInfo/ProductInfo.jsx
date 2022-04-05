import React from 'react';
import './ProductInfo.scss';
import { getDevice } from '../../utils';

function ProductInfo({
    name,
    image,
    isNew,
    description,
    content,
    isReverse,
}) {


    const imageSrc = image[ getDevice() ]
    const className = 'card-info' + (isReverse ? ' card-info--reverse' : '');

    return (
        <div className={className}>
        <img src={`../../${imageSrc}`} className="card-info-image card-info__image" />
        <div className="card-info-content card-info__content">
            {isNew && <p className="subtitle subtitle--orange card-info-content__subtitle">NEW PRODUCT</p>}
            <h2 className="h2 card-info-content__title">{name}</h2>
            <p>{description}</p>
            {content}
        </div>
        </div>
    );
}

export default ProductInfo;
