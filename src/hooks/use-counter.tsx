import { useState, useEffect } from 'react';

function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return { count, handleClick };
}

export default useCounter;
