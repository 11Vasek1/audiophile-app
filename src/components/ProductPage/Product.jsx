import React from 'react';
import { useNavigate } from 'react-router';
import './Product.scss';
import ProductFeatures from './ProductFeatures';
import ProductFotos from './ProductFotos';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductLike from './ProductLike';



function Product({product}) {
	const {name, image, isNew, price, description, features, includes, gallery, others} = product;

	const navigate = useNavigate();
	const goBack = ()=>navigate(-1);

	

  return (
    <div className="container">
			<button type='button' onClick={goBack}>Вернуться</button>
			<ProductInfo 
				name={name}
				image={image}
				isNew={isNew}
				price={price}
				description={description}				
			/>
			<ProductFeatures
				features={features}
				includes={includes}
			/>
			<ProductFotos gallery={gallery}/>
			<ProductLike others={others}/>
		</div>
  );
}


export default Product;
