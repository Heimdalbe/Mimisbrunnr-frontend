import './BigFooter.css';
import ContactSection from './ContactSection/ContactSection';
import NuttigeLinksSection from './NuttigeLinksSection/NuttigeLinksSection';

const BigFooter = () => {
  return (
    <div className='dark-bg big-footer'>
      <div className='container footer-sections'>
        <ContactSection />
        <NuttigeLinksSection />
      </div>
      <img
        className="jormungandr"
        src="Jormungandr.png"
        alt="Jormungandr"
      />
    </div>
  )
}

export default BigFooter;