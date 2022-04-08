import { useState } from 'react';

export default function useProductCounter() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return 1;
    });
  }
  return { count, increment, decrement };
}
