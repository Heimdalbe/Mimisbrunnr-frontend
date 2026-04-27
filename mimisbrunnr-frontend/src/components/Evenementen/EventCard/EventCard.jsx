import { useNavigate } from "react-router-dom";
import EventIcon from "../Andere/EventIcon";
import "./EventCard.css";

const EventCard = ({ id, banner, start, end, name, category }) => {
  const navigate = useNavigate();
  const date = new Date(start);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("nl-BE", { month: "long" }).slice(0, 3);
  const start_time = date.toLocaleTimeString();
  const end_time = new Date(end).toLocaleTimeString();

  return (
    <div
      className="event-card"
      style={{ backgroundImage: `url(${banner.url})` }}
      onClick={() => navigate(`/evenementen/${id}`)}
    >
      <EventIcon category={category} />
      <div className="event-info">
        <div className="date">
          <p className="day">{day}</p>
          <p className="month">{month}</p>
        </div>
        <div className="line" />
        <div className="title-time">
          <h3>{name}</h3>
          <p className="footnote">{`${start_time} - ${end_time}`}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
