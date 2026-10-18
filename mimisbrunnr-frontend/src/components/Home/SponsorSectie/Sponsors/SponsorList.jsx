import { useEffect, useRef, useState } from 'react';
import SponsorDetails from '../../../Sponsors/SponsorDetails/SponsorDetails';

const SponsorList = ({ sponsors, hasOverflow }) => {
  const trackRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!trackRef.current) return;
    const imgs = [...trackRef.current.querySelectorAll('img')];
    Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => setReady(true));
  }, [sponsors]);

  if (!sponsors?.length) return null;

  const renderSponsors = () =>
    sponsors.map((s) => <SponsorDetails key={s.id} id={s.id} name={s.name} logo={s.logo} website={s.website} />);

  return (
    <div className="sponsorlist-wrapper">
      <div
        ref={trackRef}
        className={`sponsorlist marquee ${hasOverflow ? 'overflowing' : ''} ${ready ? 'ready' : ''}`}
        style={{ '--count': sponsors.length }}
      >
        {renderSponsors()}
        <div className="sponsorlist-dupe" aria-hidden="true" inert="">
          {renderSponsors()}
        </div>
      </div>
    </div>
  );
};

export default SponsorList;
