export const celsiusToFahrenheit = (c) => {
  return (c * 9) / 5 + 32;
};

export const fahrenheitToCelsius = (f) => {
  return ((f - 32) * 5) / 9;
};