import "./WerkgroepCard.css";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";

const WerkgroepCard = ({ naam, beschrijving, url }) => {
  return (
    <div className="werkgroep-card">
      <h2>{naam}</h2>
      <p>{beschrijving}</p>
      <PrimaryButton text={"Join de werkgroep"} to={url} />
    </div>
  );
};

export default WerkgroepCard;
