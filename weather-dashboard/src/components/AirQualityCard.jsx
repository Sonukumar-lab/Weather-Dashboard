import { motion } from "framer-motion";

const AirQualityCard = ({ data }) => {
  if (!data) return null;

  const hourly = data.hourly;

  return (
    <motion.div 
      className="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="card">
        <p className="card-title">PM10</p>
        <h3 className="card-value">{hourly.pm10?.[0]}</h3>
      </div>

      <div className="card">
        <p className="card-title">PM2.5</p>
        <h3 className="card-value">{hourly.pm2_5?.[0]}</h3>
      </div>

      <div className="card">
        <p className="card-title">CO</p>
        <h3 className="card-value">{hourly.co?.[0] || "-"}</h3>
      </div>

      <div className="card">
        <p className="card-title">NO2</p>
        <h3 className="card-value">{hourly.no2?.[0] || "-"}</h3>
      </div>
    </motion.div>
  );
};

export default AirQualityCard;