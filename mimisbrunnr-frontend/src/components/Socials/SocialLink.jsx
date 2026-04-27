import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";
import "./Socials.css";

const icons = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  twitch: <FaTwitch />,
  discord: <FaDiscord />,
};

const SocialLink = ({ type, url }) => {
  return (
    <a href={url} className="social-link" target="blank">
      {icons[type.name]}
    </a>
  );
};

export default SocialLink;
