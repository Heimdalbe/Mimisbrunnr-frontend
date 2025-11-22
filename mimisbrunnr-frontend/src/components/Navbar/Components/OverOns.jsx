import '../Navbar.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const OverOns = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='over-ons-link' onClick={() => setIsOpen(!isOpen)}>
      Over ons
      {
        isOpen && (
          <IoIosArrowUp />
        )
      }
      {
        !isOpen && (
          <IoIosArrowDown />
        )
      }
    </div>
  )
}

export default OverOns;