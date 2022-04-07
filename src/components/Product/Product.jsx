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
import GoBack from '../GoBack/GoBack';

const space = {
  mobile: 88,
  tablet: 120,
  desktop: 160,
};

// const space

// margin-top: 79px;
// margin-bottom: 56px;

function Product() {
  const [product, setProduct] = useState({});
  const { get } = useFetch('http://localhost:3002/');
  const params = useParams();

  useEffect(() => {
    get(`items/${params.id}`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log('Could not load product details', error));
  }, []);



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
      <Spacer space={{
        mobile: 16,
        tablet: 32,
        desktop: 80,
      }}/>

      <Spacer space={{
        mobile: 24,
        tablet: 24,
        desktop: 56,
      }}>
        <GoBack />
      </Spacer>
      

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
