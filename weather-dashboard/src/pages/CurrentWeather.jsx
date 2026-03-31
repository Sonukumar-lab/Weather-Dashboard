import { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherDetails from "../components/WeatherDetails";
import AirQualityCard from "../components/AirQualityCard";
import HourlyCharts from "../components/HourlyCharts";
import TemperatureToggle from "../components/TemperatureToggle";
import DatePicker from "../components/DatePicker";
import Loader from "../components/Loader";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useWeatherContext } from "../context/WeatherContext";

const CurrentWeather = () => {
  const { weatherData, airData, loading, error } = useWeatherContext();

  //  Today date
  const today = new Date().toISOString().split("T")[0];
  const [unit, setUnit] = useState("C");
  const [date, setDate] = useState(today);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!weatherData) return <Loader />;

  //  Find index of selected date
  const selectedIndex = weatherData?.daily?.time?.findIndex(
    (d) => d === date
  );

  const formatTemperature = (tempC) => {
    if (tempC === undefined || tempC === null) return "--";
    return unit === "C" ? tempC : (tempC * 9) / 5 + 32;
  };

  return (
    <DashboardLayout>
      <div className="container">

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <DatePicker value={date} onChange={setDate} />

          <TemperatureToggle
            unit={unit}
            onToggle={() => setUnit(unit === "C" ? "F" : "C")}
          />
        </div>

        {/* Cards */}
        <div className="grid">
          <WeatherCard
            title="Temp (Current)"
            value={formatTemperature(
              weatherData?.current_weather?.temperature
            )}
            unit={`°${unit}`}
          />

          <WeatherCard
            title="Max Temp"
            value={formatTemperature(
              weatherData?.daily?.temperature_2m_max?.[selectedIndex]
            )}
            unit={`°${unit}`}
          />

          <WeatherCard
            title="Min Temp"
            value={formatTemperature(
              weatherData?.daily?.temperature_2m_min?.[selectedIndex]
            )}
            unit={`°${unit}`}
          />
        </div>

        <WeatherDetails data={weatherData} unit={unit} date={date} />
        <AirQualityCard data={airData} />

        {/* Hourly Charts */}
        <HourlyCharts
          data={weatherData}
          airData={airData}
          date={date}
        />

      </div>
    </DashboardLayout>
  );
};

export default CurrentWeather;