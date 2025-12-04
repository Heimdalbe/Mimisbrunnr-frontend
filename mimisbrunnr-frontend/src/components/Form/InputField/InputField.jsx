import './InputField.css';

const InputField = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className='input-field'>
      <label htmlFor={label}>{label}</label>

      {type === "message" ? (
        <textarea id={label} className="textarea-field" placeholder={placeholder} value={value} onChange={onChange}></textarea>
      ) : (
        <input type={type} id={label} placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default InputField;
