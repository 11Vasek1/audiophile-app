import React from 'react';
import '../../scss/App.scss';

export default function InputNumber(props) {
  const { count, increment, decrement } = props;
  return (
    <div className="number">
      <button className="number__spin minus" onClick={decrement}></button>
      <div className="number__input">{count}</div>
      <button className="number__spin plus" onClick={increment}></button>
    </div>
  );
}
