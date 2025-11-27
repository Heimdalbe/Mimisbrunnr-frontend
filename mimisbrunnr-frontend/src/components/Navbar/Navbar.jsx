import { Link } from 'react-router-dom';
import './Navbar.css';
import { PiUserCircle } from "react-icons/pi";
import NavbarHamburger from './Components/NavbarHamburger';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import OverOns from './Components/OverOns';
import NavContactButton from './Components/NavContactButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-desktop'>
          <Link className='logo' to={"/"}>
            <img src="./HeimdalBannerTransparantWit.png" alt="Heimdal Banner" />
          </Link>

          <div className="nav-links">
            <div>
              <OverOns />
              <Link to={"/albums"} className="nav-link">Albums</Link>
              <Link to={"/praesidium"} className="nav-link">Praesidium</Link>
              <Link to={"/evenementen"} className="nav-link">Evenementen</Link>
            </div>
            <div>
              <Link to={"/contact"} className='contact-link'>
                <NavContactButton />
              </Link>
              <Link to={"/user"} className="user-icon">
                <i class="fa-solid fa-circle-user"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className='navbar-mobile'>
          <Link to={"/"} className='logo'>
            <img src="./HeimdalBannerTransparantWit.png" alt="Heimdal Banner" />
          </Link>
          {
            !isOpen && (
              <div className='nav-links'>
                <Link to={"/user"} className="user-icon">
                  <i class="fa-solid fa-circle-user"></i>
                </Link>
                <NavbarHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            )
          }
          {
            isOpen && (
              <div className='nav-links'>
                <i class="fa-solid fa-xmark" onClick={() => setIsOpen(!isOpen)}></i>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
