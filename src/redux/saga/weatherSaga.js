import { fork, put, call, takeLatest } from "redux-saga/effects";
import { getItem, setItem } from "../reducers/index";
import { getData } from "../api";

function* onLoadWeatherAsync({ payload }) {
  try {
    const weatchrName = payload;
    const response = yield call(getData, weatchrName);
    if (response.status === 200) {
      yield put(setItem({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadWeather() {
  yield takeLatest(getItem.type, onLoadWeatherAsync);
}

export const weatherSaga = [fork(onLoadWeather)];
