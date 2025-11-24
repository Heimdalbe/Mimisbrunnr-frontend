import { FiChevronRight } from "react-icons/fi";
import './NuttigeLink.css';

const NuttigeLink = ({ link, text }) => {
  return (
    <div className='link'>
      <a href={link} className="nuttige-link">
        <FiChevronRight className="link-icon" />
        {text}
      </a>
    </div>
  );
};

export default NuttigeLink;
