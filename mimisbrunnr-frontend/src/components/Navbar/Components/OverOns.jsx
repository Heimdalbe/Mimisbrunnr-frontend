import '../Navbar.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const OverOns = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='over-ons-link nav-link' onClick={() => setIsOpen(!isOpen)}>
      Over ons
      {
        isOpen && (
          <i class="fa-solid fa-angle-up"></i>
        )
      }
      {
        !isOpen && (
          <i class="fa-solid fa-angle-down"></i>
        )
      }
    </div>
  )
}

export default OverOns;