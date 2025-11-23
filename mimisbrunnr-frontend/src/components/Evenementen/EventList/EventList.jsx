import { useEffect, useRef } from "react";
import EventCard from '../EventCard/EventCard';
import './EventList.css';

// TODO: hintende animatie dat je naar rechts kan swipen?

const EventList = ({ events }) => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {events.map((event) => (
          <EventCard 
              id={event.id} 
              image={event.image} 
              date={event.date} 
              start_time={event.start_time} 
              end_time={event.end_time} 
              title={event.title}
              type={event.type} />
        ))}
        <div style={{ flex: '0 0 10px' }} />
      </div>
    </div>
  );
};

export default EventList;
