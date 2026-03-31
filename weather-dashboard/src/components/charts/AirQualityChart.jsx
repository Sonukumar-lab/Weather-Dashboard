import WeatherCard from "./WeatherCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const AirQualityCard = ({ data }) => {
  if (!data) return null;

  //  Current values (first index)
  const current = {
    aqi: data.hourly.us_aqi?.[0],
    pm10: data.hourly.pm10?.[0],
    pm25: data.hourly.pm2_5?.[0],
    co: data.hourly.carbon_monoxide?.[0],
    no2: data.hourly.nitrogen_dioxide?.[0],
    so2: data.hourly.sulphur_dioxide?.[0],
  };

  //  Chart data
  const chartData = data.hourly.time.map((t, i) => ({
    time: new Date(t).getHours() + ":00",
    pm10: data.hourly.pm10?.[i],
    pm2_5: data.hourly.pm2_5?.[i],
  }));

  return (
    <div style={{ marginTop: "30px" }}>

      {/*  CARDS */}
      <div className="grid">
        <WeatherCard title="AQI" value={current.aqi} />
        <WeatherCard title="PM10" value={current.pm10} />
        <WeatherCard title="PM2.5" value={current.pm25} />
        <WeatherCard title="CO" value={current.co} />
        <WeatherCard title="NO2" value={current.no2} />
        <WeatherCard title="SO2" value={current.so2} />
      </div>

      {/*  CHART */}
      <div className="chart-container">
        <h3>Air Quality (PM10 & PM2.5)</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="pm10"
              stroke="#3b82f6"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="pm2_5"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AirQualityCard;