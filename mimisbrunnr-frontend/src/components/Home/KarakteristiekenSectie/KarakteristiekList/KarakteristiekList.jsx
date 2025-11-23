import KarakteristiekCard from "../Karakteristiek/KarakteristiekCard";
import './KarakteristiekList.css';

const KarakteristiekList = ({ characteristics }) => {
  return (
    <div className="card-wrapper">
      {characteristics.map((ch) => (
          <KarakteristiekCard
            iconClass={ch.iconClass}
            name={ch.name}
            text={ch.text}
          />
      ))}
    </div>
  );
}

export default KarakteristiekList;