import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../Common/AsyncData/AsyncData';
import SocialLink from '../../Socials/SocialLink';
import './SponsorOverlay.css';

const SponsorOverlay = ({ id, setShowOverlay }) => {
  const { data: sponsor = {}, error: sponsorError, isLoading: sponsorsAreLoading } = useSWR(`sponsors/${id}`, getAll);

  return (
    <div className="overlay" onClick={() => setShowOverlay(false)}>
      <div className="overlay-content sponsor-overlay-modal" onClick={(e) => e.stopPropagation()}>
        <AsyncData error={sponsorError} loading={sponsorsAreLoading}>
          <div className="overlay-image-wrapper">
            <img
              className="overlay-image sponsor-overlay-logo"
              src={sponsor.logo?.url}
              alt={`Logo van ${sponsor.name}`}
            />
          </div>
          <div className="text-and-info sponsor-overlay-info">
            <h1>{sponsor.name}</h1>
            {sponsor.description?.length > 0 && <p style={{ marginBottom: 0 }}>{sponsor.benefits}</p>}
            {sponsor.benefits?.length > 0 && (
              <div className="sponsor-overlay-benefits">
                <h2>Extra Voordelen:</h2>
                <p style={{ marginBottom: 0 }}>{sponsor.benefits}</p>
              </div>
            )}
          </div>
        </AsyncData>
        <div className="button-bar sponsor-overlay-actions">
          <div className="close-button" onClick={() => setShowOverlay(false)}>
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </div>
          {sponsor.website && (
            <SocialLink type="website" url={sponsor.website} ariaLabel={`Website van ${sponsor.name}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorOverlay;
