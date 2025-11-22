import CopyrightSection from "./CopyRightSection/CopyRightSection";
import SmallFooterLinks from "./SmallFooterLinks/SmallFooterLinks";
import './SmallFooter.css';

const SmallFooter = () => {
  return (
    <footer className="small-footer container">
      <SmallFooterLinks />
      <CopyrightSection />
    </footer>
  )
}

export default SmallFooter;