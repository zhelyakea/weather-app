import { createAction, createReducer } from "redux-act";

const initialState = [];
export const loadCities = createAction("action/LOAD_CITIES");
const handleLoadCities = (state, cities) => cities;
export const addCity = createAction("action/ADD_CITY");
const handleAddCity = (state, city) => [...state, city];
export const removeCity = createAction("action/REMOVE_CITY");
const handleRemoveCity = (state, id) => [
  ...state.filter(city => city.id !== id)
];
export default createReducer(
  {
    [loadCities]: handleLoadCities,
    [addCity]: handleAddCity,
    [removeCity]: handleRemoveCity
  },
  initialState
);
