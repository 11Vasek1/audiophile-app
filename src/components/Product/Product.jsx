import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../store/cartSlice';
import useFetch from '../../Hooks/useFetch';
import useProductCounter from '../../Hooks/useProductCounter';
import { ProductFeatures, ProductPhotos, ProductLike } from '.';
import ProductInfo from '../ProductInfo/ProductInfo';
import {
  Categories,
  About,
  Cart,
  InputNumber,
  Button,
  Spacer,
} from '..';

import './Product.scss';
import GoBack from '../GoBack/GoBack';

const space = {
  mobile: 88,
  tablet: 120,
  desktop: 160,
};
const URL = 'http://localhost:3001/';

function Product() {
  const [product, setProduct] = useState({});
  const { count, increment, decrement } = useProductCounter();
  const { get } = useFetch(URL);
  const params = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    get(`items/${params.id}`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log('Could not load product details', error));
  }, []);



  const onProductAdd = (item) => {
    dispatch(addProduct(item));
  };

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
      <p className="h6 product-info__price">
        $
        {price}
      </p>
      <div className="product-info__store">
        <InputNumber
          product={product}
          setProduct={setProduct}
          count={count}
          increment={increment}
          decrement={decrement}
        />
        <Button onClick={() => onProductAdd({ ...product, quantity: count })}>
          ADD TO CART
        </Button>
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
      <Spacer space={space}>{others && <ProductLike others={others} />}</Spacer>
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
