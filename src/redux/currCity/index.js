import { createAction, createReducer } from "redux-act";

export const loadCurrCity = createAction("action/LOAD_CURR_CITY");
const handleLoadCurrCity = (state, currCity) => currCity;
export const setCurrCity = createAction("action/SET_CURR_CITY");
const handleSetCurrCity = (state, { name, temp }) => ({ name, temp });
export default createReducer(
  {
    [setCurrCity]: handleSetCurrCity,
    [loadCurrCity]: handleLoadCurrCity
  },
  {}
);
