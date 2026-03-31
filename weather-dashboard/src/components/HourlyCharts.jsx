import Chart from "./Chart";

const HourlyCharts = ({ data, airData, date }) => {
  if (!data) return null;

  const filterByDate = (times, cb) =>
    times
      .map((t, i) => {
        if (!date || t.startsWith(date)) return cb(t, i);
        return null;
      })
      .filter(Boolean);

  let weatherData = filterByDate(data.hourly.time, (t, i) => ({
    time: new Date(t).getHours() + ":00",
    temperature: data.hourly.temperature_2m[i],
    humidity: data.hourly.relativehumidity_2m[i],
    precipitation: data.hourly.precipitation[i],
    visibility: data.hourly.visibility[i],
    wind: data.hourly.windspeed_10m[i],
  }));

  if (weatherData.length === 0) {
    weatherData = data.hourly.time.map((t, i) => ({
      time: new Date(t).getHours() + ":00",
      temperature: data.hourly.temperature_2m[i],
      humidity: data.hourly.relativehumidity_2m[i],
      precipitation: data.hourly.precipitation[i],
      visibility: data.hourly.visibility[i],
      wind: data.hourly.windspeed_10m[i],
    }));
  }

  const airQualityData = airData?.hourly?.time
    ? filterByDate(airData.hourly.time, (t, i) => ({
        time: new Date(t).getHours() + ":00",
        pm10: airData.hourly.pm10?.[i],
        pm25: airData.hourly.pm2_5?.[i],
      }))
    : [];

  return (
    <div className="charts-wrapper">

      <div className="chart-block">
        <h3>Temperature</h3>
        <Chart data={weatherData} dataKey="temperature" />
      </div>

      <div className="chart-block">
        <h3>Humidity</h3>
        <Chart data={weatherData} dataKey="humidity" />
      </div>

      <div className="chart-block">
        <h3>Precipitation</h3>
        <Chart data={weatherData} dataKey="precipitation" />
      </div>

      <div className="chart-block">
        <h3>Visibility</h3>
        <Chart data={weatherData} dataKey="visibility" />
      </div>

      <div className="chart-block">
        <h3>Wind Speed</h3>
        <Chart data={weatherData} dataKey="wind" />
      </div>

      {airQualityData.length > 0 && (
        <div className="chart-block">
          <h3>Air Quality (PM10 & PM2.5)</h3>
          <Chart data={airQualityData} dataKey="pm10" secondKey="pm25" />
        </div>
      )}

    </div>
  );
};

export default HourlyCharts;