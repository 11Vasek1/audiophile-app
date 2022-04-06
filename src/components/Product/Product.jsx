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

import './Product.scss';

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
        <div className="number">
          <div className="number__field">
            <input
              className="number__input"
              type="number"
              defaultValue="1"
              min="1"
            />
          </div>
          <div className="number__spin minus"></div>
          <div className="number__spin plus"></div>
        </div>

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
      <Spacer space={space}>
        <ProductFeatures features={features} includes={includes} />

        {gallery && <ProductPhotos gallery={gallery} />}
        {others && <ProductLike others={others} />}
      </Spacer>

      <Categories />
      <Spacer space={space}>
        <About />
      </Spacer>
    </div>
  );
}

export default Product;
