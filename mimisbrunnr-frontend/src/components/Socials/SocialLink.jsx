import * as FaIcons from 'react-icons/fa';
import './Socials.css';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const SocialLink = ({ type, url, ariaLabel }) => {
  const socialType = (type?.name ?? type)?.toLowerCase();

  const iconName = `Fa${capitalize(socialType ?? '')}`;

  const IconComponent = FaIcons[iconName] ?? FaIcons.FaGlobe;

  return (
    <a href={url} className="social-link" target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      <IconComponent />
    </a>
  );
};

export default SocialLink;
