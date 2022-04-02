import React from 'react';
import clsx from 'clsx';
import '../scss/App.scss';

export default function Input(props) {
  const { type = 'text', placeholder, ...rest } = props;
  const classes = clsx({
    input__text: type === 'text',
    payment__input: type === 'radio',
    number__input: type === 'number',
  });
  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
