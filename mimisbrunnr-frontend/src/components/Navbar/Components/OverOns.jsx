import '../Navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const OverOns = ({ links = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`over-ons-wrapper ${open ? "open" : ""}`}>
      <div className='over-ons-link'>
        <Link to={'/over-ons'}>Over ons</Link>
        <button
          className="over-ons-toggle"
          onClick={(e) => {
            e.preventDefault();
            setOpen(prev => !prev);
          }}
          aria-label="Toggle submenu"
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      
      <div className="submenu">
        {links.map((item, index) => (
          <Link 
            key={index} 
            to={item.to} 
            className="submenu-item"
            onClick={() => setOpen(false)}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OverOns;