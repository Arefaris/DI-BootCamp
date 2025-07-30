import { useState } from 'react';

type LastAction = 'increment' | 'decrement' | null;

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<LastAction>(null);

  const increment = (): void => {
    setCount(prev => prev + 1);
    setLastAction('increment');
  };

  const decrement = (): void => {
    setCount(prev => prev - 1);
    setLastAction('decrement');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      {lastAction && (
        <p>Last action: {lastAction}</p>
      )}
    </div>
  );
};

export default Counter;