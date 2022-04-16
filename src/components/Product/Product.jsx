import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProductFeatures, ProductPhotos, ProductLike } from '.';
import { Categories, About, Spacer } from '..';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import GoBack from '../GoBack/GoBack';

import './Product.scss';

const space = {
  mobile: 88,
  tablet: 120,
  desktop: 160,
};

function Product() {
  const params = useParams();
  const index = useSelector((state) =>
    state.products.products.findIndex((product) => product.slug === params.slug)
  );
  const product = useSelector((state) => state.products.products[index]);

  return (
    <div className="container">
      <Spacer
        space={{
          mobile: 16,
          tablet: 32,
          desktop: 80,
        }}
      />
      <GoBack />

      <Spacer space={space}>
        {product && <ProductInfo product={product} />}
      </Spacer>

      <Spacer space={space}>
        {product && <ProductFeatures product={product} />}
      </Spacer>

      <Spacer space={space}>
        {product && <ProductPhotos product={product} />}
      </Spacer>
      <Spacer space={space}>
        {product && <ProductLike product={product} />}
      </Spacer>
      <Categories />
      <About />
    </div>
  );
}

export default Product;
