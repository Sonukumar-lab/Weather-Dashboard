import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WindChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Wind Speed</h3>
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="wind" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WindChart;