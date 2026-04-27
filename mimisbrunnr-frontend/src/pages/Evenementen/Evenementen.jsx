import EventList from "../../components/Evenementen/EventList/EventList";
//import events from "../../api/events";
import UpcomingEvent from "../../components/Evenementen/EventCard/UpcomingEvent";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ChipList from "../../components/Common/Chip filter/ChipList";
import useSWR from "swr";
import { getAll } from "../../api";
import AsyncData from "../../components/Common/AsyncData/AsyncData";

//TODO: Events uit het verleden niet meer tonen (waarschijnlijk best in backend uitfilteren)

const Evenementen = () => {
  const { data: data = { events: [] }, isLoading: eventsAreLoading, error: eventsError } = useSWR(`events/pub`, getAll);
  var upcomingEvent = data?.events?.[0];

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
      <AsyncData loading={eventsAreLoading} error={eventsAreLoading}>
        {upcomingEvent && <UpcomingEvent
          id={upcomingEvent.id}
        />}
      </AsyncData>
      <ChipList chips={chips} />
      <AsyncData loading={eventsAreLoading} error={eventsError}>
        <EventList events={data.events} />
      </AsyncData>
    </div>
  );
};

export default Evenementen;
