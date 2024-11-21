import { createActions, createReducer } from "reduxsauce";

// Define actions and types
const { Types, Creators } = createActions({
  increment: null,
  decrement: null,
});

export const CounterTypes = Types;
export const CounterActions = Creators; // You can now use CounterActions directly

const INITIAL_STATE = { count: 0 };

// Reducer functions
const increment = (state) => ({
  ...state,
  count: state.count + 1,
});

const decrement = (state) => ({
  ...state,
  count: state.count - 1,
});

// Create reducer
export const counterReducer = createReducer(INITIAL_STATE, {
  [CounterTypes.INCREMENT]: increment,
  [CounterTypes.DECREMENT]: decrement,
});
