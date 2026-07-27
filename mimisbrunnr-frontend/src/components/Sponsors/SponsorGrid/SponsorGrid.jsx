import SponsorDetails from "../SponsorDetails/SponsorDetails";
import './SponsorGrid.css';

const SponsorGrid = ({ sponsors, }) => {
  return (
    <div className="sponsor-grid">
      {sponsors.map(sponsor => <SponsorDetails key={sponsor.id} id={sponsor.id} name={sponsor.name} logo={sponsor.logo} website={sponsor.website} ></SponsorDetails>)}
    </div>
  )
}

export default SponsorGrid;