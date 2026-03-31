import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TemperatureChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Temperature (Hourly)</h3>
      <div style={{ overflowX: "auto" }}>
        <div style={{ minWidth: "600px", height: "300px" }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TemperatureChart;