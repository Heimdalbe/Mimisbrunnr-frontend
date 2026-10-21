import '../Navbar.css';

const NavbarHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
    </button>
  );
};

export default NavbarHamburger;
