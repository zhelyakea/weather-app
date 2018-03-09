import React from "react";
import City from "../City";
import withCities from "./withCities";

import block from "bem-cn";
import "./MainPage.css";
const b = block("MainPage");

export const MainPage = ({
  name,
  temp,
  cities,
  handleAddCity,
  handleEnterCity,
  removeCity,
  eneteredCity,
  handleAddCityOnEnterPress
}) => (
  <div className={b()}>
    <header className={b("header")()}>
      <h1 className={b("title")()}>Weather App</h1>
    </header>
    <h2 className={b("current-position-title")()}>
      Your current city and weather
    </h2>
    {name && temp ? (
      <p className={b("current-position")()}>
        City: <span className={b("current-position-param")()}>{name}</span>{" "}
        wheather:{" "}
        <span className={b("current-position-param")()}>{temp}&#8457;</span>
      </p>
    ) : (
      <p className={b("current-position")()}>...Loading</p>
    )}
    <h2 className={b("city-title")()}>Add city</h2>
    <div className={b("add-wrapper")()}>
      <input
        value={eneteredCity}
        onChange={handleEnterCity}
        onKeyPress={handleAddCityOnEnterPress}
        className={b("input")()}
        placeholder="add city"
      />
      <button onClick={handleAddCity} className={b("add-button")()}>
        +
      </button>
    </div>
    {!!cities.length && (
      <div className={b("cities")()}>
        <h2 className={b("cities-title")()}>Cities list</h2>
        {cities.map(({ id, name, temp }) => (
          <City {...{ key: id, id, name, temp, removeCity }} />
        ))}
      </div>
    )}
  </div>
);
export default withCities(MainPage);
