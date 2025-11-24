import './SelectField.css';

const SelectField = ({ label, placeholder, options }) => {
  return (
    <div className='select-field'>
      <label htmlFor={label}>{label}</label>
      <select>
        <option selected disabled>{placeholder}</option>
        {
          options.map((o) => (
            <option value={o}>{o}</option>
          ))
        }
      </select>
    </div>
  );
};

export default SelectField;
