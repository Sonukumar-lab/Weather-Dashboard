import { motion } from "framer-motion";

const WeatherCard = ({ title, value, unit }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="card"
    >
      <p style={{ opacity: 0.7 }}>{title}</p>
      <h2>{value} {unit}</h2>
    </motion.div>
  );
};

export default WeatherCard;