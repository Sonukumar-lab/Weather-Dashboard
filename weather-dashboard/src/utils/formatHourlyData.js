import { formatTime } from "./formatDate";

export const formatHourlyData = (data) => {
  if (!data || !data.hourly) return [];

  const {
    time,
    temperature_2m,
    relativehumidity_2m,
    precipitation,
    visibility,
    windspeed_10m,
  } = data.hourly;

  return time.map((t, i) => ({
    time: formatTime(t),

    temperature: temperature_2m?.[i],
    humidity: relativehumidity_2m?.[i],
    precipitation: precipitation?.[i],
    visibility: visibility?.[i],
    wind: windspeed_10m?.[i],
  }));
};