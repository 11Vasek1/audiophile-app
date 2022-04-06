import React from 'react';
import { getDevice } from '../utils';

export default function Spacer({ space, style = {}, children }) {
  let _space = parseInt(space);
  const isObj = isNaN(_space);

  const device = getDevice();

  if (isObj) {
    _space = space[device] || 0;
  }

  return (
    <div
      style={{
        marginBottom: _space,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
