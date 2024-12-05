// sagas/rootSaga.js
import { all } from "redux-saga/effects";
import watchFetchProducts from "./productSaga"; // Adjust the path

export default function* rootSaga() {
  yield all([watchFetchProducts()]); // Combine all watcher sagas
}
