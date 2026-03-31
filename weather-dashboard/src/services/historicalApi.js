import axios from "axios";

export const fetchHistoricalData = async (lat, lon, startDate, endDate) => {
  try {
    const res = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive",
      {
        params: {
          latitude: lat,
          longitude: lon,
          start_date: startDate,
          end_date: endDate,

          daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "temperature_2m_mean",
            "precipitation_sum",
            "windspeed_10m_max",
          ].join(","),

          timezone: "auto",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Historical API Error:", error);
    throw error;
  }
};