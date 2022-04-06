import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import ProductFeatures from './ProductFeatures';
import ProductPhotos from './ProductPhotos';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductLike from './ProductLike';
import Categories from '../Categories/Categories';
import About from '../About/About';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Spacer from '../Spacer';
import Cart from '../Cart/Cart';

import './Product.scss';
import InputNumber from '../UI/inputNumber';

const space = {
  mobile: 88,
  tablet: 120,
  desktop: 160,
};

function Product() {
  const [product, setProduct] = useState({});
  const { get } = useFetch('http://localhost:3001/');
  const params = useParams();

  useEffect(() => {
    get(`items/${params.id}`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log('Could not load product details', error));
  }, []);

  const navigate = useNavigate();

  product.isNew = product.new;

  const {
    name,
    image,
    isNew,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = product;

  const goBack = () => navigate(-1);

  const productInfoChild = (
    <>
      <p className="h6 product-info__price">$ {price}</p>

      <div className="product-info__store">
        <InputNumber />
        <Button>ADD TO CART</Button>
      </div>
    </>
  );

  return (
    <div className="container">
      <button
        type="button"
        className="product-link-back product__link-back"
        onClick={goBack}
      >
        Go Back
      </button>

      <Spacer space={space}>
        {image && (
          <ProductInfo
            name={name}
            image={image}
            isNew={isNew}
            description={description}
            isReverse={false}
            content={productInfoChild}
          />
        )}
      </Spacer>
      
      <Spacer space={space}>
        <ProductFeatures features={features} includes={includes} />
      </Spacer>

      <Spacer space={space}>
        {gallery && <ProductPhotos gallery={gallery} />}
      </Spacer>
      <Spacer space={space}>
        {others && <ProductLike others={others} />}    
      </Spacer>
      <Spacer space={space}>
        <Categories />
      </Spacer>

      <Spacer space={space}>
        <About />
      </Spacer>

      <Cart />
    </div>
  );
}

export default Product;
