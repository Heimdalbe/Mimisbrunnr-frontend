import { useState } from "react";
import './SelectField.css';

const SelectField = ({ label, placeholder, options }) => {
  const [selected, setSelected] = useState(placeholder);
  const [open, setOpen] = useState(false);
  
  return (
    <div className='select-field'>
      <label>{label}</label>

      <div 
        className='dropdown'
        onClick={() => setOpen(!open)}
      >
        <div className='dropdown-select'>
          <span className='select'>{selected}</span>
          <i className={`fa ${open ? "fa-caret-up" : "fa-caret-down"}`}></i>

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
                onClick={() => { setSelected(o); setOpen(false); }}
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
