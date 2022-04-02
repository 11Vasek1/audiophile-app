import React from 'react';
import './ProductInfo.scss';
import { formatImgSrc, getDevice } from '../../utils';


function ProductInfo({name, image, isNew, price, description, content}){
    const imageSrc = formatImgSrc( image[ getDevice() ] )
    return (
        <div className='card-info'>
            <img src={ imageSrc } className="card-info-image" />
            <div className="card-info-content">
                {isNew && <p className='subtitle'>NEW PRODUCT</p>}
                <h2 className="h2">{name}</h2>
                <p>{description}</p>
                <h6 className="h6">$ {price}</h6>
                {content}
            </div>
        </div>
    )
}

export default ProductInfo
