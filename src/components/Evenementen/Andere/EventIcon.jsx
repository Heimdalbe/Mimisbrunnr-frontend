import './Event.css';

const EventIcons = {
  CULTUUR: 'fa-solid fa-puzzle-piece',
  SCHACHTEN: 'fa-solid fa-child-reaching',
  SPORT: 'fa-solid fa-football',
  FEESTENLAN: 'fa-solid fa-music',
};

const EventIcon = ({ category }) => {
  const iconClass = EventIcons[category] || 'fa-solid fa-question'; // fallback icoon
  return (
    <span className="icon">
      <i className={iconClass} aria-hidden="true"></i>
    </span>
  );
};

export default EventIcon;
