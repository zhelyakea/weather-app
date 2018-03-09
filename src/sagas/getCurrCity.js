import { put, call } from "redux-saga/effects";

import { setCurrCity } from "../redux/currCity";
import { fetchGet } from "../services/fetch";
import getLocationService from "../services/getLocation";
import { saveToLocalStorage } from "../services/localStorage";
import { BASE_QUERY, APPID } from "../constants";

const qery = (lat, lng) => `${BASE_QUERY}?lat=${lat}&lon=${lng}&APPID=${APPID}`;

export function* getCurrCity() {
  const { lat, lng } = yield call(getLocationService);
  const { name, main: { temp } } = yield call(fetchGet, qery(lat, lng));
  yield put(setCurrCity({ name, temp }));
  yield call(saveToLocalStorage, "currCity", { name, temp });
}
