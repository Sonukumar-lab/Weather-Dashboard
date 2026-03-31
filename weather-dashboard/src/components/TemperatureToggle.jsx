

const TemperatureToggle = ({ unit, onToggle }) => {
  const handleToggle = () => {
    if (onToggle) onToggle(); // safety
  };

  return (
    <button className="btn" onClick={handleToggle}>
      Switch to {unit === "C" ? "°F" : "°C"}
    </button>
  );
};

export default TemperatureToggle;