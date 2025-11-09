import CopyrightSection from "./CopyRightSection/CopyRightSection";
import SmallFooterLinks from "./SmallFooterLinks/SmallFooterLinks";
import './SmallFooter.css';

const SmallFooter = () => {
  return (
    <div className="small-footer">
      <SmallFooterLinks />
      <CopyrightSection />
    </div>
  )
}

export default SmallFooter;