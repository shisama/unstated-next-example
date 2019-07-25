import React, { useState } from "react";
import { render } from "react-dom";
import { createContainer } from "unstated-next";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
};

const Counter = createContainer(useCounter);

const CounterDisplay = () => {
  const counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <p>You clicked {counter.count} times</p>
      <button onClick={counter.increment}>+</button>
    </div>
  );
};

const App = () => (
  <Counter.Provider>
    <CounterDisplay />
    <CounterDisplay />
  </Counter.Provider>
);

render(<App />, document.getElementById("root"));
