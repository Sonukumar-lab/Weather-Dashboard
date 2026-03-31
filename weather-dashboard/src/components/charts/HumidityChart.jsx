import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const HumidityChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Humidity</h3>
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="humidity" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HumidityChart;