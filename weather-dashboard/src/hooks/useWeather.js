import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/weatherApi";
import { fetchAirQuality } from "../services/airQualityApi";

const useWeather = (lat, lon) => {
  const [data, setData] = useState(null);
  const [airData, setAirData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const getWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const weatherRes = await fetchWeatherData(lat, lon);
        const airRes = await fetchAirQuality(lat, lon);

        setData(weatherRes);
        setAirData(airRes);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [lat, lon]);

  return { data, airData, loading, error };
};

export default useWeather;