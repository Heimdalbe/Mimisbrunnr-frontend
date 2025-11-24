import './InputField.css';

const InputField = ({ type, label, placeholder }) => {
  return (
    <div className='input-field'>
      <label htmlFor={label}>{label}</label>

      {type === "message" ? (
        <textarea id={label} className="textarea-field" placeholder={placeholder}></textarea>
      ) : (
        <input type={type} id={label} placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputField;
