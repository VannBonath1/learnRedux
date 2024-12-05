import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

//actions

const { Types, Creators } = createActions({
  fetchProductsRequest: null,
  fetchProductsSuccess: ["products"],
  fetchProductsFailure: ["error"],
});

export const ProductTypes = Types;
export const ProductActions = Creators;

export const INITIAL_STATE = Immutable({
  products: [],
  loading: false,
  error: null,
});

// reducers handlers

const fetchProductsRequest = (state) =>
  state.set("loading", true).set("error", null);

const fetchProductsSuccess = (state, { products }) =>
  state.set("loading", false).set("products", products);

const fetchProductsFailure = (state, { error }) =>
  state.set("loading", false).set("erorr", error);

//reducers

export const reducer = createReducer(INITIAL_STATE, {
  [ProductTypes.FETCH_PRODUCTS_REQUEST]: fetchProductsRequest,
  [ProductTypes.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
  [ProductTypes.FETCH_PRODUCTS_FAILURE]: fetchProductsFailure,
});
