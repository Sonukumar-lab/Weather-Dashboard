import axios from "axios";

const AIR_BASE_URL = "https://air-quality-api.open-meteo.com/v1";

export const fetchAirQuality = async (lat, lon) => {
  try {
    const res = await axios.get(`${AIR_BASE_URL}/air-quality`, {
      params: {
        latitude: lat,
        longitude: lon,

        hourly: [
          "pm10",
          "pm2_5",
          "carbon_monoxide",
          "nitrogen_dioxide",
          "sulphur_dioxide",
          "ozone",
          "aerosol_optical_depth",
          "us_aqi", //  IMPORTANT ADD
        ].join(","),

        timezone: "auto",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Air Quality API Error:", error);
    throw error;
  }
};