import React from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import '../../scss/App.scss';

export default function Items(props) {
  const { DB } = props;
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <div className="items">
        <h1 className="items__title">Items</h1>
        {DB.map((item) => {
          return <Item key={item.id} details={item}></Item>;
        })}
      </div>
    </>
  );
}
