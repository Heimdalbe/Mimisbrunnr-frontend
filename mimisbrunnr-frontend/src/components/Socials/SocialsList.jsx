import SocialLink from "./SocialLink";
import "./Socials.css";

const defaultSocials = [
  { type: { name: "facebook" }, link: "https://www.facebook.com/Heimdal.be/" },
  { type: { name: "instagram" }, link: "https://www.instagram.com/heimdalgent/" },
  { type: { name: "linkedin" }, link: "https://www.linkedin.com/company/heimdal-be/" },
  { type: { name: "twitch" }, link: "https://www.twitch.tv/heimdalgent" },
];

const SocialsList = ({ socials = defaultSocials }) => {
  return (
    <div className="socials-list">
      {socials.map((s, index) => (
        <SocialLink key={index} type={s.type} url={s.url} />
      ))}
    </div>
  );
};

export default SocialsList;
