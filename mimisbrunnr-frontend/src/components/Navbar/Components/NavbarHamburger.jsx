import { RxHamburgerMenu } from "react-icons/rx";
import '../Navbar.css';

const NavbarHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
    </button>
  );
};

export default NavbarHamburger;
