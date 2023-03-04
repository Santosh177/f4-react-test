import { FAHRENHEIT, CELCIUS } from "./action";
export const reducer = (state, action) => {
  console.log("reducer state", state);
  switch (action.type) {
    case CELCIUS:
      return {
        celcius: true,
        fahrenheit: false,
      };
    case FAHRENHEIT:
      return {
        celcius: false,
        fahrenheit: true,
      };
    default:
      return {
        celcius: true,
        fahrenheit: false,
      };;
  }
};
