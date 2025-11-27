import SocialLink from "./SocialLink";
import './Socials.css';

const SocialsList = () => {
  return (
    <div className="socials-list">
      <SocialLink type="facebook" link="https://www.facebook.com/Heimdal.be/" />
      <SocialLink type="instagram" link="https://www.instagram.com/heimdalgent/" />
      <SocialLink type="linkedin" link="https://www.linkedin.com/company/heimdal-be/" />
      <SocialLink type="twitch" link="https://www.twitch.tv/heimdalgent" />
    </div>
  );
};

export default SocialsList;
