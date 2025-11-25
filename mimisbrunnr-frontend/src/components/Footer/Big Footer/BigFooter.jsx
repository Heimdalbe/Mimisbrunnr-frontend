import './BigFooter.css';
import ContactSection from './ContactSection/ContactSection';
import NuttigeLinksSection from './NuttigeLinksSection/NuttigeLinksSection';

const BigFooter = () => {
  return (
    <div className='dark-bg'>
      <div className='container'>
        <div className='big-footer'>
          <div className="footer-sections">
            <ContactSection />
            <NuttigeLinksSection />
          </div>
          <div className="jormungandr-wrapper">
            <img
              className="jormungandr"
              src="Jormungandr.png"
              alt="Jormungandr"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigFooter;