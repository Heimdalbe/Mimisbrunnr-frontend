import InputField from "../../../../Form/InputField/InputField";

const FooterContactForm = () => {
  return (
    <div>
      <form>
        <InputField type="text" label="Naam" placeholder={"John Heimdal"} />
        <InputField type="email" label="Email" placeholder={"john.heimdal@placeholder.be"} />
        <InputField type="text" label="Onderwerp" />
        <InputField type="message" label="Bericht" placeholder={"Vul hier je boodschap in..."} />
        <button type="submit" className="primary-button-dark">Verstuur</button>
      </form>
    </div>
  )
}

export default FooterContactForm;