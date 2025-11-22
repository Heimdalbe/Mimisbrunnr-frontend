import './EventCard.css';

//TODO: Image als achtergrond image instellen ipv hier displayen

const EventCard = ({ image, date, start_time, end_time, title }) => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("nl-BE", { month: "long" }).slice(0, 3);

  return (
    <div className="card">
      <img src={image} height={222} />
      <div className="event-info">
        <div className="date">
          <p className="day">{day}</p>
          <p className="month">{month}</p>
        </div>
        <div className="title-time">
          <p className="title">{title}</p>
          <p className="time">{`${start_time} - ${end_time}`}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
