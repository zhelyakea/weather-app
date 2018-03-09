import React from "react";
import withCity from "./withCity";

import block from "bem-cn";
import "./City.css";
const b = block("City");

export const City = ({ id, name, temp, handleRemoveCity }) => (
  <div className={b()}>
    <p className={b("text")()}>{name}</p>
    <div className={b("right-block")()}>
      <p className={b("temp")()}>{temp}&#8457;</p>
      <button onClick={handleRemoveCity} className={b("remove-button")()}>
        x
      </button>
    </div>
  </div>
);

export default withCity(City);
