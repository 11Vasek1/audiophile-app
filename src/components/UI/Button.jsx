import React from 'react';
import clsx from 'clsx';
import '../../scss/App.scss';

export default function Button(props) {
  const { outline, arrow, className, children, ...rest } = props;
  const classes = clsx(className, {
    button_arrow: arrow,
    button_orange: !outline && !arrow,
    button_white: outline,
  });
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
