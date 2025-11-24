import FooterTitle from "../FooterTitle";
import FooterContactForm from './ContactForm/FooterContactForm';

const ContactSection = () => {
  return (
    <div>
      <FooterTitle title={"Contact"} isDark={false} />
      <FooterContactForm />
    </div>
  )
}

export default ContactSection;