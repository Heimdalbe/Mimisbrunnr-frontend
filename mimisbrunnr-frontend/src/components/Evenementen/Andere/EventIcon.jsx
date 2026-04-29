import './Event.css';

const EventIcons = {
  CULTUUR: "fa-solid fa-puzzle-piece",
  SCHACHT: "fa-solid fa-child-reaching",
  SPORT: "fa-solid fa-football",
  FEESTENLAN: "fa-solid fa-music",
};

const EventIcon = ({ category }) => {
  const iconClass = EventIcons[category] || "fa-solid fa-question"; // fallback icoon
  return (
    <div className='icon'>
      <i className={iconClass}></i>
    </div>
  );
};

export default EventIcon