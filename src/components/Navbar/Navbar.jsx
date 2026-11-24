import { Link } from 'react-router-dom';
import './Navbar.css';
import NavbarHamburger from './Components/NavbarHamburger';
import { useState, useEffect } from 'react';
import NavDropdown from './Components/NavDropdown';
import NavContactButton from './Components/NavContactButton';
import { useAuth } from '../../contexts/AuthContext';

const NavbarLinks = () => (
  <>
    <NavDropdown label="Over ons" to="/over-ons" links={[
      { label: 'Wie zijn we?', to: '/over-ons' },
      { label: 'Clublied', to: '/over-ons/clublied' },
      { label: 'Boekje', to: '/over-ons/boekje' },
      { label: 'Statuten', to: '/over-ons/statuten' },
      { label: 'Werkgroepen', to: '/over-ons/werkgroepen' },
      { label: 'Sponsors', to: '/sponsors' },
    ]} />
    <Link to="/albums" className="nav-link">Albums</Link>
    <NavDropdown label="Praesidium" to="/praesidium" links={[
      { label: 'Ereleden', to: '/praesidium/ereleden' },
      { label: 'Superschachten', to: '/praesidium/superschachten' },
      { label: 'Lustrumcomité', to: '/praesidium/lustrumcomite' },
    ]} />
    <Link to="/evenementen" className="nav-link">Evenementen</Link>
    <Link to="/jaarthema" className="nav-link">Jaarthema</Link>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleMobileMenuClick = (e) => {
    if (e.target.closest('a')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-desktop">
          <Link className="logo" to={'/'}>
            <img src="/HeimdalBannerTransparantWit.webp" alt="Heimdal Banner" />
          </Link>

          <div className="nav-links">
            <div>
              <NavbarLinks />
            </div>
            <div>
              <a href="#footer">
                <NavContactButton />
              </a>
              <Link to={isAuthenticated ? '/account' : '/login'} className="user-icon">
                <i className="fa-solid fa-circle-user"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-mobile">
          <Link to={'/'} className="logo">
            <img src="/HeimdalBannerTransparantWit.webp" alt="Heimdal Banner" />
          </Link>

          <div className="nav-links">
            <Link to={isAuthenticated ? '/account' : '/login'} className={`user-icon ${isOpen ? 'open' : ''}`}>
              <i className="fa-solid fa-circle-user"></i>
            </Link>
            <NavbarHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <div className={`mobile-menu ${isOpen ? 'open' : ''}`} inert={!isOpen}>
            <div className="mobile-links" onClick={handleMobileMenuClick}>
              <NavbarLinks />

              <a href="#footer">
                <NavContactButton />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
