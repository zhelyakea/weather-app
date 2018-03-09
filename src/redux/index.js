import { combineReducers } from "redux";
import cities from "./cities";
import currCity from "./currCity";

export default combineReducers({
  cities,
  currCity
});
