import axios from "axios";
import { API_CONFIG } from "../constants/apiConfig";

export const fetchWeatherData = async (lat, lon) => {
  try {
    const res = await axios.get(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.FORECAST}`,
      {
        params: {
          latitude: lat,
          longitude: lon,

          current_weather: true,

          hourly: [
            "temperature_2m",
            "relativehumidity_2m",
            "precipitation",
            "visibility",
            "windspeed_10m",
          ].join(","),

          daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "sunrise",
            "sunset",
            "precipitation_probability_max",
            "windspeed_10m_max",
          ].join(","),

          timezone: "auto",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Weather API Error:", error);
    throw error;
  }
};