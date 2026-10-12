import SponsorDetails from '../../../Sponsors/SponsorDetails/SponsorDetails';

const SponsorList = ({ sponsors, hasOverflow }) => {
  const renderSponsors = () =>
    sponsors.map((s) => <SponsorDetails key={s.id} id={s.id} name={s.name} logo={s.logo} website={s.website} />);

  return (
    <div className="sponsorlist-wrapper">
      <div className={`sponsorlist marquee ${hasOverflow ? 'overflowing' : ''}`}>
        {renderSponsors()}

        {/* Duplicate set, only used by the mobile marquee */}
        <div className="sponsorlist-dupe" aria-hidden="true" inert="">
          {renderSponsors()}
        </div>
      </div>
    </div>
  );
};

export default SponsorList;
