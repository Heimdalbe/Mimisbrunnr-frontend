import { RxHamburgerMenu } from "react-icons/rx";
import '../Navbar.css';

const NavbarHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
      <i class="fa-solid fa-bars"></i>
    </button>
  );
};

export default NavbarHamburger;
