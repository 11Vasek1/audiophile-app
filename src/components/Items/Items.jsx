import React from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import Categories from '../Categories/Categories';
import About from '../About/About';

import '../../scss/App.scss';

export default function Items(props) {
  const { items } = props;
  const { category } = useParams();
  return (
    <>
      <ul className="items">
        <h2 className="items__name">{category}</h2>
        <div className="container">
          {items
            .filter((item) => item.category === category)
            .map((item) => {
              return <Item key={item.id} details={item}></Item>;
            })}
        </div>
      </ul>
      <Categories />
      <About />
    </>
  );
}
