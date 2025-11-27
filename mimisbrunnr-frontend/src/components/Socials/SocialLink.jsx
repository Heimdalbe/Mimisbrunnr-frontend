import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";
import './Socials.css';

const icons = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  twitch: <FaTwitch />,
};

const SocialLink = ({ type, link }) => {
  return (
    <a href={link} className="social-link" target="blank">
      {icons[type]}
    </a>
  );
};

export default SocialLink;
