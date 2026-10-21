import SocialLink from './SocialLink';
import './Socials.css';

export const defaultSocials = [
  { type: { name: 'facebook' }, url: 'https://www.facebook.com/Heimdal.be/' },
  { type: { name: 'instagram' }, url: 'https://www.instagram.com/heimdalgent/' },
  { type: { name: 'linkedin' }, url: 'https://www.linkedin.com/company/heimdal-be/' },
  { type: { name: 'twitch' }, url: 'https://www.twitch.tv/heimdalgent' },
];

const SocialsList = ({ socials }) => {
  const socialItems = Array.isArray(socials) && socials.length > 0 ? socials : defaultSocials;

  return (
    <div className="socials-list">
      {socialItems.map((s, index) => (
        <SocialLink key={`${s.type?.name ?? 'social'}-${index}`} type={s.type} url={s.url} />
      ))}
    </div>
  );
};

export default SocialsList;
