import SocialLink from "./SocialLink";
import './Socials.css';

const SocialsList = () => {
  return (
    <div className="socials-list">
      <SocialLink type="facebook" link="https://facebook.com" />
      <SocialLink type="instagram" link="https://instagram.com" />
      <SocialLink type="linkedin" link="https://linkedin.com" />
      <SocialLink type="twitch" link="https://twitch.tv" />
    </div>
  );
};

export default SocialsList;
