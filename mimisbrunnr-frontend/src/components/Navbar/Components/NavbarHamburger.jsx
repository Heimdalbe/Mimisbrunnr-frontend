import { RxHamburgerMenu } from "react-icons/rx";
import '../Navbar.css';

const NavbarHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
      <RxHamburgerMenu size={35} />
    </button>
  );
};

export default NavbarHamburger;
