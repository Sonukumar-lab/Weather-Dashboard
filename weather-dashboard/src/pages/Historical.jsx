import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DatePicker from "../components/DatePicker";
import Chart from "../components/Chart";
import Loader from "../components/Loader";

import useHistorical from "../hooks/useHistorical";
import { useWeatherContext } from "../context/WeatherContext";

const Historical = () => {
  const { location } = useWeatherContext();
  const [date, setDate] = useState("");

  const { data, loading, error } = useHistorical(
    location?.latitude,
    location?.longitude,
    "2024-01-01",
    "2024-01-10"
  );

  if (loading) return <Loader />;
  if (error) return <p>Error loading data</p>;
  if (!data) return null;

  //  Fixed filtering (supports partial/full date match)
  const filteredData = date
    ? data.filter((item) => item.date?.startsWith(date))
    : data;

  return (
    <DashboardLayout>
      <div className="container">
        <h2 style={{ marginTop: "20px" }}>
          Historical Insights 📊
        </h2>

        {/* Date Picker */}
        <DatePicker value={date} onChange={setDate} />

        {/* Charts */}
        <Chart data={filteredData} dataKey="temp_max" />
        <Chart data={filteredData} dataKey="precipitation" />
        <Chart data={filteredData} dataKey="wind_speed" />
      </div>
    </DashboardLayout>
  );
};

export default Historical;