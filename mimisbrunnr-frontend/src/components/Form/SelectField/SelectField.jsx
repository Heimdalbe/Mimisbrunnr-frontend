import { useState } from "react";
import './SelectField.css';

const SelectField = ({ label, placeholder, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };
  
  return (
    <div className='select-field'>
      <label>{label}</label>

      <div 
        className='dropdown'
        onClick={() => setOpen(!open)}
      >
        <div className='dropdown-select'>
          <span className='select'>{value || placeholder}</span>
          <i className={`fa ${open ? "fa-angle-up" : "fa-angle-down"}`}></i>
        </div>

        <div 
          className='dropdown-list'
          style={{
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden"
          }}
        >
          {options.map((o) => (
              <div 
                key={o} 
                className='dropdown-list__item'
                onClick={() => handleSelect(o)}
              >
                {o}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SelectField;
