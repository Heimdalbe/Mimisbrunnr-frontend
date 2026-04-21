import WerkgroepenList from "../../../components/Werkgroepen/WerkgroepenList/WerkgroepenList";
import werkgroepen from "../../../api/werkgroepen";
import "./Werkgroepen.css";

const Werkgroepen = () => {
  return (
    <div className="container-sm-tm werkgroepen-page">
      <h1>Werkgroepen</h1>
      <p className="werkgroepen-intro">
        Tijdelijk plaatsvervangend tekstje want ja hoe weet ik nu wat hier
        eigenlijk zou moeten komen? Daarom houden we het hier voorlopig nog even
        gevuld en passen we dit in de loop van tijd aan met de echte tekst die
        hier moet komen! :)
      </p>
      <WerkgroepenList werkgroepen={werkgroepen} />
    </div>
  );
};

export default Werkgroepen;
