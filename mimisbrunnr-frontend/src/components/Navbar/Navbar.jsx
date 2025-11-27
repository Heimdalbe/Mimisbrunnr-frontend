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
      <div className='navbar-desktop'>
        <Link to={"/"}>
          <img className='logo' src="./HeimdalBannerTransparantWit.png" alt="Heimdal Banner" height={65} />
        </Link>

        <div className="nav-links">
          <OverOns />

          <Link to={"/albums"} className="nav-link">Albums</Link>
          <Link to={"/praesidium"} className="nav-link">Praesidium</Link>
          <Link to={"/evenementen"} className="nav-link">Evenementen</Link>
          <Link to={"/contact"}>
            <NavContactButton />
          </Link>
          <Link to={"/user"} className="user-icon">
            <PiUserCircle size={35} />
          </Link>
        </div>
      </div>


      <div className='navbar-mobile'>
        <Link to={"/"} className='logo'>
          <img src="./HeimdalBannerTransparantWit.png" alt="Heimdal Banner" height={65} />
        </Link>
        {
          !isOpen && (
            <div className='nav-links'>
              <Link to={"/user"} className="user-icon">
                <PiUserCircle size={35} />
              </Link>
              <NavbarHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          )
        }
        {
          isOpen && (
            <div className='nav-links'>
              <IoClose className='close-btn' size={30} onClick={() => setIsOpen(!isOpen)} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
