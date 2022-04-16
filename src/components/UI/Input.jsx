import React from 'react';
import clsx from 'clsx';
import '../../scss/App.scss';

export default function Input(props) {
  const {
    type = 'text',
    placeholder,
    label,
    name,
    register,
    required,
    className,
    errors,
    ...rest
  } = props;
  const classes = clsx(
    {
      input__text: type !== 'radio' || type !== 'number',
      payment__input: type === 'radio',
      number__input: type === 'number',
      'input__text--error': errors?.[label],
    },
    className
  );
  return (
    <>
      <div className="input__box">
        {label && (
          <label
            className={clsx('input__span', {
              'input__span--error': errors?.[label],
            })}
          >
            {label}
          </label>
        )}
        {errors?.[label] && (
          <span className="input__error">
            {errors?.[label]?.message || 'Error'}
          </span>
        )}
      </div>
      {label === 'Email Address' ? (
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          {...register(label || name, {
            required,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          {...rest}
        />
      ) : (
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          {...register(label || name, {
            required,
            minLength: { value: 3, message: 'At least 3 characters' },
          })}
          {...rest}
        />
      )}
    </>
  );
}
