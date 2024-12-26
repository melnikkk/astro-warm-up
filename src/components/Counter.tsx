import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onDecrementClick = () => {
    setCount(count - 1);
  };

  const onIncrementClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="my-12">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={onDecrementClick}>Decrement</button>
      <button onClick={onIncrementClick}>Increment</button>
    </div>
  );
};
