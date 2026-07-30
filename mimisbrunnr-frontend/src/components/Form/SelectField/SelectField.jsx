import { useState } from 'react';
import './SelectField.css';

const normalizeOption = (o) =>
  typeof o === 'object' && o !== null ? o : { label: o, value: o };

const SelectField = ({ label, placeholder, options = [], value, onChange }) => {
  const [open, setOpen] = useState(false);

  const normalized = options.map(normalizeOption);

  const handleSelect = (option) => {
    if (onChange) onChange(option.value);
    setOpen(false);
  };

  const displayLabel = normalized.find((o) => o.value === value)?.label ?? value ?? placeholder;

  return (
    <div className="select-field">
      <label className="label">{label}</label>
      <div className="dropdown" onClick={() => setOpen(!open)}>
        <div className="dropdown-select">
          <span className="select">{displayLabel}</span>
          <i className={`fa ${open ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
        </div>
        <div
          className="dropdown-list"
          style={{
            opacity: open ? 1 : 0,
            visibility: open ? 'visible' : 'hidden',
          }}
        >
          {normalized.map((o) => (
            <div
              key={o.value}
              className="dropdown-list__item"
              onClick={() => handleSelect(o)}
            >
              {o.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectField;