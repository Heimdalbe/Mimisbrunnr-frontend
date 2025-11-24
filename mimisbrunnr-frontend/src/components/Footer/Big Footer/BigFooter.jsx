import './BigFooter.css';
import ContactSection from './ContactSection/ContactSection';
import NuttigeLinksSection from './NuttigeLinksSection/NuttigeLinksSection';

const BigFooter = () => {
  return (
    <div className='big-footer'>
      <div className='container'>
        <ContactSection />
        <NuttigeLinksSection />
      </div>
    </div>
  )
}

export default BigFooter;