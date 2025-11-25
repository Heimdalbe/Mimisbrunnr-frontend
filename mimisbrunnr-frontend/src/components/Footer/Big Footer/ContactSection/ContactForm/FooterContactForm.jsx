import InputField from "../../../../Form/InputField/InputField";
import SelectField from "../../../../Form/SelectField/SelectField";
import './ContactForm.css';

const FooterContactForm = () => {

  const onderwerpOpties = ["Algemeen", "Evenement", "Extra info"];

  return (
    <div>
      <form>
        <InputField type="text" label="Naam" placeholder={"John Heimdal"} />
        <InputField type="email" label="Email" placeholder={"john.heimdal@placeholder.be"} />
        <SelectField label={"Onderwerp"} placeholder={"-- Maak een keuze --"} options={onderwerpOpties} />
        <InputField type="message" label="Bericht" placeholder={"Vul hier je boodschap in..."} />
        <button type="submit" className="primary-button-dark">Verstuur</button>
      </form>
    </div>
  )
}

export default FooterContactForm;