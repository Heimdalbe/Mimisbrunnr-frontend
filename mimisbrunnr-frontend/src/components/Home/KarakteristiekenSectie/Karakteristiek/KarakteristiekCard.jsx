import './KarakteristiekCard.css';

const KarakteristiekCard = ({ iconClass, name, text, isActive }) => {
  return (
    <div className={`characteristic-card ${isActive ? 'active' : 'muted'}`}>
      <div className={`circle ${isActive ? 'active-circle' : 'muted-circle'}`}>
        <i className={iconClass}></i>
      </div>
      <div className="characteristic-text">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default KarakteristiekCard;