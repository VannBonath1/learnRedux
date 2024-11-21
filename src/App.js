import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "./reducers/counterReducer";

function App() {
  const count = useSelector((state) => state.counter.count); // Access state
  const dispatch = useDispatch();

  // Dispatch actions
  const handleIncrement = () => dispatch(CounterActions.increment());
  const handleDecrement = () => dispatch(CounterActions.decrement());
  return (
    <div>
      <h1>counter {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
