import './BigFooter.css';
import Jormungandr from './Jormungandr/Jormungandr';
import ContactSection from './ContactSection/ContactSection';
import NuttigeLinksSection from './NuttigeLinksSection/NuttigeLinksSection';

const BigFooter = () => (
  <div className="dark-bg big-footer">
    <div className="container footer-sections">
      <ContactSection />
      <NuttigeLinksSection />
    </div>
    <Jormungandr />
  </div>
);

export default BigFooter;
