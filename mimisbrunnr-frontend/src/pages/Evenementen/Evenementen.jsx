import EventList from "../../components/Evenementen/EventList/EventList";
import events from "../../api/events";
import UpcomingEvent from "../../components/Evenementen/EventCard/UpcomingEvent";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ChipList from "../../components/Common/Chip filter/ChipList";

//TODO: Events uit het verleden niet meer tonen (waarschijnlijk best in backend uitfilteren)

const Evenementen = () => {
  const sortedEvents = events.sort((a, b) => a.date - b.date);
  const upcomingEvent = sortedEvents[0];

  const chips = [
    {
      id: 1,
      label: "Sport",
      icon: "fa-football",
    },
    {
      id: 2,
      label: "Cultuur",
      icon: "fa-puzzle-piece",
    },
    {
      id: 3,
      label: "Schachten",
      icon: "fa-person",
    },
    {
      id: 4,
      label: "Feest&LAN",
      icon: "fa-music",
    },
  ];

  return (
    <div className="container-sm-tm">
      <Breadcrumbs children={[{ link: "evenementen", isLast: true }]} />
      <UpcomingEvent
        title={upcomingEvent.title}
        location={upcomingEvent.location}
        date={upcomingEvent.date}
        start_time={upcomingEvent.start_time}
        description={upcomingEvent.description}
        image={upcomingEvent.image}
        type={upcomingEvent.type}
      />
      <ChipList chips={chips} />
      <EventList events={sortedEvents} />
    </div>
  );
};

export default Evenementen;
