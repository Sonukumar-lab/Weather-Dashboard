import { useEffect, useState } from "react";
import { fetchHistoricalData } from "../services/historicalApi";

const useHistorical = (lat, lon, startDate, endDate) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //  Safer validation
    if (
      lat == null ||
      lon == null ||
      !startDate ||
      !endDate
    ) return;

    const getHistorical = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetchHistoricalData(lat, lon, startDate, endDate);

        //  Safe formatting
        const formatted =
          res?.daily?.time?.map((date, index) => ({
            date,
            temp_max: res?.daily?.temperature_2m_max?.[index] ?? null,
            temp_min: res?.daily?.temperature_2m_min?.[index] ?? null,
            precipitation: res?.daily?.precipitation_sum?.[index] ?? null,
            wind_speed: res?.daily?.windspeed_10m_max?.[index] ?? null,
          })) || [];

        setData(formatted);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch historical data");
      } finally {
        setLoading(false);
      }
    };

    getHistorical();
  }, [lat, lon, startDate, endDate]);

  return { data, loading, error };
};

export default useHistorical;