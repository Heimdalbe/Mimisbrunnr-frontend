import EventList from "../../components/Evenementen/EventList/EventList";
import events from '../../api/events';
import UpcomingEvent from "../../components/Evenementen/EventCard/UpcomingEvent";

const Evenementen = () => {

  const sortedEvents = events.sort((a, b) => a.date - b.date);
  const upcomingEvent = sortedEvents[0];

  return (
    <div className="container-sm-tm">
      {/* BREADCRUMBS */}
      <UpcomingEvent title={upcomingEvent.title} location={upcomingEvent.location} date={upcomingEvent.date} start_time={upcomingEvent.start_time} description={upcomingEvent.description} image={upcomingEvent.image} type={upcomingEvent.type} />
      {/* CHIP FILTERS */}
      <EventList events={sortedEvents} />
    </div>
  )
}

export default Evenementen;