const DatePicker = ({ value, onChange }) => {
  const today = new Date();

  //  LOCAL DATE FIX (IMPORTANT)
  const formatLocal = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const minDate = formatLocal(today);

  const max = new Date();
  max.setDate(today.getDate() + 5);
  const maxDate = formatLocal(max);

  return (
    <input
      type="date"
      className="input"
      min={minDate}
      max={maxDate}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default DatePicker;