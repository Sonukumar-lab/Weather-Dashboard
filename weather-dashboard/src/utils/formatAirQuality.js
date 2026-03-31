export const formatAirQuality = (data) => {
  if (!data || !data.hourly) return null;

  const {
    time,
    pm10,
    pm2_5,
    carbon_monoxide,
    nitrogen_dioxide,
    sulphur_dioxide,
  } = data.hourly;

  const lastIndex = time.length - 1;

  return {
    current: {
      pm10: pm10?.[lastIndex],
      pm2_5: pm2_5?.[lastIndex],
      co: carbon_monoxide?.[lastIndex],
      no2: nitrogen_dioxide?.[lastIndex],
      so2: sulphur_dioxide?.[lastIndex],
    },

    chartData: time.map((t, i) => ({
      time: new Date(t).getHours() + ":00",
      pm10: pm10?.[i],
      pm2_5: pm2_5?.[i],
    })),
  };
};