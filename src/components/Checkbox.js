const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={false}
        onChange={onChange}
      />
      <p className="label">{label}</p>
    </label>
  );
};

export default Checkbox;

// pass props: label, value, onChange
