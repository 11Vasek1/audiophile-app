import React from 'react';
import './ProductInfo.scss';
import { formatImgSrc, getDevice } from '../../utils';


function ProductInfo({name, image, isNew, price, description, content, isReverse}){

    const imageSrc = image[ getDevice() ]

    const className = 'card-info' +  (isReverse ? " card-info--reverse" : "")
    
    return (
        <div className={className}>
            <img src={ imageSrc } className="card-info-image" />
            <div className="card-info-content">
                {isNew && <p className='subtitle subtitle--orange'>NEW PRODUCT</p>}
                <h2 className="h2 card-info-content__title">{name}</h2>
                <p>{description}</p>
                {content}
            </div>
        </div>
    )
}

export default ProductInfo
