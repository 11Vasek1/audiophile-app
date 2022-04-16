import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader, About, Categories } from '../../components';
import Item from '../Item/Item';

import './Items.scss';

export default function Items() {
  const { category } = useParams();
  const items = useSelector((state) => state.products.products);

  const isLoading = useSelector((state) => state.products.status === 'loading');
  const error = useSelector((state) => state.products.error);

  return (
    <>
      <ul className="items">
        <h2 className="items__name">{category}</h2>
        <div className="container">
          {isLoading && <Loader className="items__loader" />}
          {error && <h2>An error occurred:{error}.</h2>}
          {items
            .filter((item) => item.category === category)
            .map((item) => {
              return <Item key={item.id} details={item}></Item>;
            })}
        </div>
      </ul>
      <div className="container">
        <Categories />
        <About />
      </div>
    </>
  );
}
