import { put, call, select } from "redux-saga/effects";

import { addCity as addCityAction } from "../redux/cities";
import { removeCity as removeCityAction } from "../redux/cities";
import { fetchGet } from "../services/fetch";
import { saveToLocalStorage } from "../services/localStorage";
import { BASE_QUERY, APPID } from "../constants";

const qery = city => `${BASE_QUERY}?q=${city}&&APPID=${APPID}`;

export function* addCity(city) {
  try {
    const { id, name, main: { temp } } = yield call(fetchGet, qery(city));
    yield put(addCityAction({ id, name, temp }));
    const { cities } = yield select(({ cities }) => ({ cities }));
    yield call(saveToLocalStorage, "cities", cities);
  } catch (error) {
    console.log(error);
  }
}
export function* removeCity(city) {
  yield put(removeCityAction(city));
  const { cities } = yield select(({ cities }) => ({ cities }));
  yield call(saveToLocalStorage, "cities", cities);
}
