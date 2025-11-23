import EventCard from '../EventCard/EventCard';
import './EventList.css';

const EventList = ({ events }) => {
  return (
    <div className='eventlist'>
      {events.map((event) => (
        <EventCard key={event.id} image={event.image} date={event.date} start_time={event.start_time} end_time={event.end_time} title={event.title} />
      ))}
    </div>
  );
};

export default EventList;
