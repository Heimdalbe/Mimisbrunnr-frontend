import { useNavigate } from "react-router-dom";
import EventIcon from '../Andere/EventIcon';
import './EventCard.css';

const EventCard = ({ id, image, date, start_time, end_time, title, type }) => {
  const navigate = useNavigate();
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("nl-BE", { month: "long" }).slice(0, 3);

  return (
    <div 
      className="event-card" 
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => navigate(`/evenement/${id}`)}
    >
      <EventIcon category={type} />
      <div className="event-info">
        <div className="date">
          <p className="day">{day}</p>
          <p className="month">{month}</p>
        </div>
        <div className='line'/>
        <div className="title-time">
          <h3>{title}</h3>
          <p className="footnote">{`${start_time} - ${end_time}`}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
