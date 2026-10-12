import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './SponsorDetails.css';
import SponsorOverlay from '../SponsorOverlay/SponsorOverlay';

const SponsorDetails = ({ id, name, logo }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Make the page non-scrollable while an overlay is open
  useEffect(() => {
    if (!showOverlay) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showOverlay]);

  return (
    <>
      <div className="sponsor-wrapper" onClick={() => setShowOverlay(true)}>
        <div className="sponsor-img-wrapper">
          <img className="sponsor-logo" src={logo.url} alt={`Logo van ${name}`} />
        </div>
      </div>

      {showOverlay && createPortal(<SponsorOverlay id={id} setShowOverlay={setShowOverlay} />, document.body)}
    </>
  );
};

export default SponsorDetails;
