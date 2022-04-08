import { useState } from 'react';

export default function useProductCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

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
