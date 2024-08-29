import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ initialCount, onUpdate }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    onUpdate('bertambah', newCount);
  };

  const decrementCount = () => {
    const newCount = count - 1;
    setCount(newCount);
    onUpdate('berkurang', newCount);
  };

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <div>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
