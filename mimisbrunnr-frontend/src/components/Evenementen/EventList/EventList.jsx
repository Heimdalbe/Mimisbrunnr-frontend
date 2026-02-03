import EventCard from '../EventCard/EventCard';
import './EventList.css';

// TODO: hintende animatie dat je naar rechts kan swipen?

const EventList = ({ events, limit }) => {
  let limitedEvents = events;

  if (limit) {
    limitedEvents = events.slice(0, 4);
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {limitedEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            image={event.image}
            date={event.date}
            start_time={event.start_time}
            end_time={event.end_time}
            title={event.title}
            type={event.type} />
        ))}
        <div className="carousel-end-spacer" />
      </div>
    </div>);
}

export default EventList;