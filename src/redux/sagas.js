import { fork, all } from "redux-saga/effects";
import rsdListSaga from "./conversionList/sagas";

const sagas = [rsdListSaga];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
