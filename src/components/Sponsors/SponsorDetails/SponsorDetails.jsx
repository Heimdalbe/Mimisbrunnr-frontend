import { useEffect, useState } from 'react';
import './SponsorDetails.css';
import { div } from 'motion/react-client';
import SponsorOverlay from '../SponsorOverlay/SponsorOverlay';

const SponsorDetails = ({ id, name, logo, website, }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // useEffect pagina niet scrollable maken als er een overlay geopend is
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);
  return (
    <>
      <div className='sponsor-wrapper' onClick={() => setShowOverlay(true)}>
        <div className='sponsor-img-wrapper'>
          <img className='sponsor-logo' src={logo.url} alt={`Logo van ${name}`} ></img>
        </div>
        <h2 className='sponsor-name'>{name}</h2>
      </div>
      {showOverlay && <SponsorOverlay id={id} setShowOverlay={setShowOverlay} />}
    </>
  )
}

export default SponsorDetails;