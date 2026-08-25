const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1 className="footer-title">Contact</h1>
      <ul>
        <li>
          <b>E-mail</b>
          <ul>
            <li>
              Algemeen: <a href="mailto:gate@heimdal.be">gate@heimdal.be</a>
            </li>
            <li>
              Public Relations: <a href="mailto:pr@heimdal.be">pr@heimdal.be</a>
            </li>
            <li>
              Praeses: <a href="mailto:praeses@heimdal.be">praeses@heimdal.be</a>
            </li>
          </ul>
        </li>
        <li>
          <b>Telefoon</b>
          <ul>
            <li>
              Praeses: <a href="tel:">+32 483 38 50 18</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ContactSection;
