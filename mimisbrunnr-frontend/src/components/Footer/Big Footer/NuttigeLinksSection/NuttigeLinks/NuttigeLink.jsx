import { FiChevronRight } from "react-icons/fi";
import './NuttigeLink.css';

const NuttigeLink = ({ link, text }) => {
  return (
    <a href={link} className="nuttige-link">
      <FiChevronRight className="link-icon" />
      {text}
    </a>
  );
};

export default NuttigeLink;
