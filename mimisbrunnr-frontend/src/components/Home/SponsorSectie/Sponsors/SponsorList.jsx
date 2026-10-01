import Sponsor from './Sponsor';

const SponsorList = ({ sponsors, hasOverflow }) => {
  return (
    <div className="sponsorlist-wrapper">
      <div className={`sponsorlist marquee ${hasOverflow ? 'overflowing' : ''}`}>
        {sponsors.map((s) => (
          <Sponsor key={s.id} logo={s.logo} url={s.website} />
        ))}
      </div>
    </div>
  );
};

export default SponsorList;