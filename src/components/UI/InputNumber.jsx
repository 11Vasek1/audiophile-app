import React from 'react';
import { useDispatch } from 'react-redux';
import '../../scss/App.scss';
import {
  addOneProduct,
  removeOneProduct,
  removeProduct,
} from '../../store/cartSlice';

export default function InputNumber(props) {
  const { count, increment, decrement, product } = props;
  const dispatch = useDispatch();
  function handlePlusClick() {
    increment();
    if (!product) {
      return;
    }
    dispatch(addOneProduct(product));
  }

  function handleMinusClick() {
    decrement();
    if (!product) {
      return;
    }
    if (product.quantity === 1) {
      return;
    }
    dispatch(removeOneProduct(product));
  }
  return (
    <div className="number">
      <button
        className="number__spin minus"
        onClick={handleMinusClick}
      ></button>
      <div className="number__input">{count}</div>
      <button className="number__spin plus" onClick={handlePlusClick}></button>
    </div>
  );
}
