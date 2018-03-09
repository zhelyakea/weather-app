import { string, func, number } from "prop-types";
import { compose, withHandlers, mapProps, setPropTypes, pure } from "recompose";

export default compose(
  withHandlers({
    handleRemoveCity: ({ removeCity, id }) => () => {
      removeCity(id);
    }
  }),
  mapProps(({ id, name, temp, handleRemoveCity }) => ({
    id,
    name,
    temp,
    handleRemoveCity
  })),
  setPropTypes({
    id: number.isRequired,
    name: string.isRequired,
    temp: number.isRequired,
    handleRemoveCity: func.isRequired
  }),
  pure
);
