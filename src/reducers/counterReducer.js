import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// actions and types
const { Types, Creators } = createActions({
  increment: null,
  decrement: null,
});

export const CounterTypes = Types;
export const CounterActions = Creators;
  
const INITIAL_STATE = Immutable({ count: 0 });

// Reducer functions
const increment = (state) => state.set("count", state.count + 1); // Use `set` method for immutability

const decrement = (state) => state.set("count", state.count - 1); // Use `set` method for immutability

// Create reducer
export const counterReducer = createReducer(INITIAL_STATE, {
  [CounterTypes.INCREMENT]: increment,
  [CounterTypes.DECREMENT]: decrement,
});
