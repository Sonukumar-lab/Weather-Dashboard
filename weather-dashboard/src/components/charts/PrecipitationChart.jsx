import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const PrecipitationChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Precipitation</h3>
      <ResponsiveContainer height={300}>
        <BarChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="precipitation" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrecipitationChart;