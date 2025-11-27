import { useState } from "react";
import InputField from "../../../../Form/InputField/InputField";
import SelectField from "../../../../Form/SelectField/SelectField";
import './ContactForm.css';

const FooterContactForm = () => {

  const onderwerpOpties = ["Algemeen", "Evenement", "Extra info"];

  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [onderwerp, setOnderwerp] = useState("");
  const [bericht, setBericht] = useState("");

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = naam !== "" && emailIsValid && onderwerp !== "" && bericht !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Form submitted!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField type="text" label="Naam" placeholder={""} value={naam} onChange={(e) => setNaam(e.target.value)}/>
        <InputField type="email" label="Email" placeholder={"john.heimdal@placeholder.be"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <SelectField label={"Onderwerp"} placeholder={"Maak een keuze..."} options={onderwerpOpties} value={onderwerp} onChange={(val) => setOnderwerp(val)} />
        <InputField type="message" label="Bericht" placeholder={"Vul hier je boodschap in..."} value={bericht} onChange={(e) => setBericht(e.target.value)} />
        <button type="submit" className="primary-button-dark" disabled={!isFormValid}>Verstuur</button>
      </form>
    </div>
  )
}

export default FooterContactForm;