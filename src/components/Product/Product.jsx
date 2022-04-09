import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/cartSlice';
import useFetch from '../../Hooks/useFetch';
import useProductCounter from '../../Hooks/useProductCounter';
import { ProductFeatures, ProductPhotos, ProductLike } from '.';
import ProductInfo from '../ProductInfo/ProductInfo';
import GoBack from '../GoBack/GoBack';

import { Categories, About, InputNumber, Button, Spacer } from '..';

import './Product.scss';

const space = {
  mobile: 88,
  tablet: 120,
  desktop: 160,
};
const URL = 'http://localhost:3002/';

function Product() {
  const [product, setProduct] = useState({});
  const { count, increment, decrement } = useProductCounter(1);
  const { get } = useFetch(URL);
  const params = useParams();
  const dispatch = useDispatch();

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

  const onProductAdd = (item) => {
    dispatch(addProduct(item));
  };

  const productInfoChild = (
    <>
      <p className="h6 product-info__price">${price}</p>
      <div className="product-info__store">
        <InputNumber
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
      <Spacer
        space={{
          mobile: 16,
          tablet: 32,
          desktop: 80,
        }}
      />

      <Spacer
        space={{
          mobile: 24,
          tablet: 24,
          desktop: 56,
        }}
      >
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
    </div>
  );
}

export default Product;
