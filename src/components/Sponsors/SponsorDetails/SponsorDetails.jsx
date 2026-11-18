import LoadingImage from '../../Common/LoadingImage/LoadingImage';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './SponsorDetails.css';
import SponsorOverlay from '../SponsorOverlay/SponsorOverlay';

const SponsorDetails = ({ id, name, logo, loading }) => {
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
          <LoadingImage className="sponsor-logo" src={logo.url} alt={`Logo van ${name}`} loading={loading} />
        </div>
      </div>

      {showOverlay && createPortal(<SponsorOverlay id={id} setShowOverlay={setShowOverlay} />, document.body)}
    </>
  );
};

export default SponsorDetails;
