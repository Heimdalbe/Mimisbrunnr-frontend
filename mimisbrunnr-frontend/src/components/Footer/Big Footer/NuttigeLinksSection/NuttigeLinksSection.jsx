import SocialsList from "../../../Socials/SocialsList";
import NuttigeLinks from "./NuttigeLinks/NuttigeLinks";
import './NuttigeLinks.css';

const NuttigeLinksSection = () => {
  return (
    <div className="nuttige-links">
      <div className="nuttige-links-desktop">
        <h1 className="footer-title">Nuttige links</h1>
        <div className="nuttige-links-container">
          <NuttigeLinks />
          <SocialsList />
        </div>
      </div>
      <div className="nuttige-links-mobile">
        <SocialsList />
      </div>
    </div>
  )
}

export default NuttigeLinksSection;