import './Event.css';

const EventIcons = {
  cultuur: "fa-solid fa-puzzle-piece",
  schacht: "fa-solid fa-child-reaching",
  sport: "fa-solid fa-football",
  feest: "fa-solid fa-music",
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