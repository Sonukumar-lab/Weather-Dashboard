import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const VisibilityChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Visibility</h3>
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visibility" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisibilityChart;