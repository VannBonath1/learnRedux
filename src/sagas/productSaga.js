import { call, put, takeLatest } from "redux-saga/effects";
import { ProductTypes, ProductActions } from "./../reducers/productReducer";

const fetchProductsApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductsApi); // Call the API
    yield put(ProductActions.fetchProductsSuccess(products)); // Dispatch success
  } catch (error) {
    yield put(ProductActions.fetchProductsFailure(error.message)); // Dispatch failure
  }
}

export default function* watchFetchProducts() {
  yield takeLatest(ProductTypes.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
