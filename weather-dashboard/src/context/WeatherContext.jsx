import { createContext, useContext } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { location, error: locationError } = useLocation();

  const { data, airData, loading, error: weatherError } = useWeather(
    location?.latitude,
    location?.longitude
  );

  return (
    <WeatherContext.Provider
      value={{
        location,
        weatherData: data,
        airData, 

        loading,
        error: locationError || weatherError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);