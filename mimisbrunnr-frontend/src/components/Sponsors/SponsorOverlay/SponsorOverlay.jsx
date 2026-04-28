import useSWR from "swr";
import { getAll } from "../../../api";
import AsyncData from "../../Common/AsyncData/AsyncData";
import { div } from "motion/react-client";
import './SponsorOverlay.css';

const SponsorOverlay = ({ id, setShowOverlay }) => {
  const { data: sponsor = {}, sponsorError, sponsorsAreLoading } = useSWR(`sponsors/${id}`, getAll);


  return (
    <div className="overlay" onClick={() => setShowOverlay(false)}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <AsyncData>
          <div className="sponsor-overlay-wrapper">
            <div className="close-button" onClick={() => setShowOverlay(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="sponsor-overlay-header">
              <h2 className="sponsor-name">{sponsor.name}</h2>
              <img className='sponsor-overlay-logo' src={sponsor.logo.url} alt={`Logo van ${name}`} ></img>
            </div>
            {sponsor.benefits.length > 0 && <div>
              <h2>Extra Voordelen:</h2>
              <p>{sponsor.benefits}</p>
            </div>}
          </div>
        </AsyncData>
      </div>
    </div>
  )
}

export default SponsorOverlay;