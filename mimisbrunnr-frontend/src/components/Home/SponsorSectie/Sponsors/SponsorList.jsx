import SponsorDetails from '../../../Sponsors/SponsorDetails/SponsorDetails';

const SponsorList = ({ sponsors, hasOverflow }) => {
  return (
    <div className="sponsorlist-wrapper">
      <div className={`sponsorlist marquee ${hasOverflow ? 'overflowing' : ''}`}>
        {sponsors.map((s) => (
          <SponsorDetails key={s.id} id={s.id} name={s.name} logo={s.logo} website={s.website} />
        ))}
      </div>
    </div>
  );
};

export default SponsorList;
