import SocialsList from "../../../Socials/SocialsList";
import NuttigeLinks from "./NuttigeLinks/NuttigeLinks";
import FooterTitle from "../FooterTitle";
import './NuttigeLinks.css';

const NuttigeLinksSection = () => {
  return (
    <div className="nuttige-links">
      <div className="nuttige-links-desktop">
        <FooterTitle title={"Nuttige links"} isDark={false} />
        <div className="nuttige-links-desktop-bottom">
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