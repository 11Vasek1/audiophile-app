import React from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import '../../scss/App.scss';

export default function Items(props) {
  const { items } = props;
  const { category } = useParams();
  console.log(category);
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
    </>
  );
}
