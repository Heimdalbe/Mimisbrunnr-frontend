import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1 className="footer-title">Contact</h1>
      <div>
        <h3>Praeses</h3>
        <ul>
          <li><FaPhoneAlt/> <a href="tel:+32483385018">+32 483 38 50 18</a></li>
          <li><FaEnvelope/> <a href="mailto:praeses@heimdal.be">praeses@heimdal.be</a></li>
        </ul>
      </div>
      <div>
        <h3>Public Relations</h3>
        <ul>
          <li><FaEnvelope/> <a href="mailto:pr@heimdal.be">pr@heimdal.be</a></li>
        </ul>
      </div>
      <div>
        <h3>Algemeen</h3>
        <ul>
          <li><FaEnvelope/> <a href="mailto:gate@heimdal.be">gate@heimdal.be</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
