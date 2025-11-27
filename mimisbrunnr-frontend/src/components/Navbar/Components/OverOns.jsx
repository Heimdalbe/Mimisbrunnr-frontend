import '../Navbar.css';
import { Link } from "react-router-dom";

const OverOns = ({ links = [] }) => {
  return (
    <div className="over-ons-wrapper">
      <div className='over-ons-link'>
        <Link to={'/over-ons'}>Over ons</Link>
        <i class="fa-solid fa-angle-down"></i>
      </div>
      
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
    </div>
  )
}

export default OverOns;