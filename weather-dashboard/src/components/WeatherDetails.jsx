import { motion } from "framer-motion";

const WeatherDetails = ({ data }) => {
  if (!data) return null;

  const daily = data.daily;

  return (
    <motion.div 
      className="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="card">
        <p className="card-title">Min Temp</p>
        <h3 className="card-value">{daily.temperature_2m_min[0]}°C</h3>
      </div>

      <div className="card">
        <p className="card-title">Max Temp</p>
        <h3 className="card-value">{daily.temperature_2m_max[0]}°C</h3>
      </div>

      <div className="card">
        <p className="card-title">Sunrise</p>
        <h3 className="card-value">{new Date(daily.sunrise[0]).toLocaleTimeString()}</h3>
      </div>

      <div className="card">
        <p className="card-title">Sunset</p>
        <h3 className="card-value">{new Date(daily.sunset[0]).toLocaleTimeString()}</h3>
      </div>
    </motion.div>
  );
};

export default WeatherDetails;