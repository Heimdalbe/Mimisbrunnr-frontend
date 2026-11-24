import '../Navbar.css';

const NavbarHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button type="button" className="hamburger-btn" aria-label="Navigatie" aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
    </button>
  );
};

export default NavbarHamburger;
