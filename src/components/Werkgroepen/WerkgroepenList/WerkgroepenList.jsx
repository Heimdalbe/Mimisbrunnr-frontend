import WerkgroepCard from "../WerkgroepCard/WerkgroepCard";
import "./WerkgroepenList.css";

const WerkgroepenList = ({ werkgroepen }) => {
  return (
    <div className="werkgroepen-list">
      {werkgroepen.map((werkgroep) => (
        <WerkgroepCard
          key={werkgroep.id}
          naam={werkgroep.naam}
          beschrijving={werkgroep.beschrijving}
          url={werkgroep.url}
        />
      ))}
    </div>
  );
};

export default WerkgroepenList;
