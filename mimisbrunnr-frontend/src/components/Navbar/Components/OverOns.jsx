import '../Navbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const OverOns = ({ links = [] }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="over-ons-wrapper">
      <div className='over-ons-link nav-link' onClick={() => setIsOpen(!isOpen)}>
        Over ons
        {isOpen ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
      </div>
      {isOpen && (
        <div className="submenu">
          {links.map((item, index) => (
            <Link 
              key={index} 
              to={item.to} 
              className="submenu-item"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default OverOns;