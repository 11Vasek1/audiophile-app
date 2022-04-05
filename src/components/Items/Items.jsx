import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import Categories from '../Categories/Categories';
import About from '../About/About';
import useFetch from '../../Hooks/useFetch';

import '../../scss/App.scss';

export default function Items() {
  const [items, setItems] = useState([]);
  const { get } = useFetch('http://localhost:3001/');
  const { category } = useParams();

  useEffect(() => {
    get('items')
      .then((data) => setItems(data))
      .catch((error) => console.log('Could not load products', error));
  }, []);

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
      <div className="container">
        <Categories />
        <About />
      </div>
    </>
  );
}
