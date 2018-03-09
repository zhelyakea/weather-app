import { LOAD_APP, ADD_CITY, REMOVE_CITY, GET_CURR_CITY } from "../constants";

export const addCity = city => ({
  type: ADD_CITY,
  city
});
export const removeCity = city => ({ type: REMOVE_CITY, city });
export const getCurrCity = () => ({ type: GET_CURR_CITY });
export const loadApp = () => ({ type: LOAD_APP });
