import SocialLink from "./SocialLink";
import "./Socials.css";

const defaultSocials = [
  { type: "facebook", link: "https://www.facebook.com/Heimdal.be/" },
  { type: "instagram", link: "https://www.instagram.com/heimdalgent/" },
  { type: "linkedin", link: "https://www.linkedin.com/company/heimdal-be/" },
  { type: "twitch", link: "https://www.twitch.tv/heimdalgent" },
];

const SocialsList = ({ socials = defaultSocials }) => {
  return (
    <div className="socials-list">
      {socials.map((s, index) => (
        <SocialLink key={index} type={s.type} link={s.link} />
      ))}
    </div>
  );
};

export default SocialsList;
