import { take, fork, call, put } from "redux-saga/effects";

import { LOAD_APP, ADD_CITY, REMOVE_CITY, GET_CURR_CITY } from "../constants";
import { addCity, removeCity } from "./city";
import { getCurrCity } from "./getCurrCity";
import { loadCities } from "../redux/cities";
import { loadCurrCity } from "../redux/currCity";
import { loadFromLocalStorage } from "../services/localStorage";

export function* loadWatcher() {
  while (true) {
    yield take(LOAD_APP);
    try {
      const cities = yield call(loadFromLocalStorage, "cities");
      if (cities.length) yield put(loadCities(cities));

      const { name, temp } = yield call(loadFromLocalStorage, "currCity");
      if (!!name && !!temp) {
        yield put(loadCurrCity({ name, temp }));
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export function* removeCityWatcher() {
  while (true) {
    const { city } = yield take(REMOVE_CITY);
    yield fork(removeCity, city);
  }
}
export function* addCityWatcher() {
  while (true) {
    const { city } = yield take(ADD_CITY);
    yield fork(addCity, city);
  }
}
export function* getLocationWatcher() {
  while (true) {
    yield take(GET_CURR_CITY);
    yield fork(getCurrCity);
  }
}
export default function* root() {
  yield fork(loadWatcher);
  yield fork(addCityWatcher);
  yield fork(removeCityWatcher);
  yield fork(getLocationWatcher);
}
