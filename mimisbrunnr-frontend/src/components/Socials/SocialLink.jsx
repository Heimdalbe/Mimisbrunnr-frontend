import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
} from 'react-icons/fa';
import './Socials.css';

const icons = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  twitch: <FaTwitch />,
  discord: <FaDiscord />,
};

const SocialLink = ({ type, url }) => {
  const socialType = type?.name ?? type;

  return (
    <a href={url} className="social-link" target="_blank" rel="noreferrer">
      {icons[socialType]}
    </a>
  );
};

export default SocialLink;
