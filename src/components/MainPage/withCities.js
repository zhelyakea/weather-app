import { connect } from "react-redux";
import { string, func, arrayOf, oneOfType, shape, number } from "prop-types";
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  mapProps,
  setPropTypes,
  pure
} from "recompose";
import { loadApp, addCity, removeCity, getCurrCity } from "../../actions";

const mapState = ({ cities, currCity }) => ({
  cities,
  currCity
});
const mapDispatch = {
  loadApp,
  addCity,
  removeCity,
  getCurrCity
};
export default compose(
  connect(mapState, mapDispatch),
  withState("eneteredCity", "enterCity", ""),
  withHandlers({
    handleAddCity: ({ addCity, eneteredCity, enterCity }) => () => {
      addCity(eneteredCity);
      enterCity("");
    },
    handleAddCityOnEnterPress: ({
      addCity,
      eneteredCity,
      enterCity
    }) => event => {
      if (event.key === "Enter") {
        addCity(eneteredCity);
        enterCity("");
      }
    },
    handleEnterCity: ({ enterCity }) => event => {
      enterCity(event.target.value);
    }
  }),
  lifecycle({
    componentDidMount() {
      const { getCurrCity, loadApp } = this.props;
      loadApp();
      getCurrCity();
    }
  }),
  mapProps(
    ({
      cities,
      currCity: { name, temp },
      handleAddCity,
      handleEnterCity,
      removeCity,
      eneteredCity,
      handleAddCityOnEnterPress
    }) => ({
      cities,
      name,
      temp,
      handleAddCity,
      handleEnterCity,
      removeCity,
      eneteredCity,
      handleAddCityOnEnterPress
    })
  ),
  setPropTypes({
    cities: arrayOf(
      shape({
        id: number,
        name: string,
        temp: oneOfType([string, number])
      })
    ),
    name: string,
    temp: number,
    handleAddCity: func.isRequired,
    handleEnterCity: func.isRequired,
    removeCity: func.isRequired,
    eneteredCity: string.isRequired,
    handleAddCityOnEnterPress: func.isRequired
  }),
  pure
);
