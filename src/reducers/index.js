import { counterReducer } from "./counterReducer";
import { combineReducers } from "redux";
import { reducer } from "./productReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: reducer,
});

export default rootReducer;
