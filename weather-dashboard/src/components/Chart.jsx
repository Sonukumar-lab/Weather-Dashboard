import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Brush,
  CartesianGrid
} from "recharts";

const Chart = ({ data, dataKey, secondKey }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p style={{ padding: "20px", textAlign: "center" }}>
        No Data Available
      </p>
    );
  }

  const xKey = data[0]?.time ? "time" : "date";

  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Main Line */}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />

          {/* Second Line */}
          {secondKey && (
            <Line
              type="monotone"
              dataKey={secondKey}
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
          )}

          {/*  ZOOM FEATURE */}
          <Brush
            dataKey={xKey}
            height={25}
            stroke="#6366f1"
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;