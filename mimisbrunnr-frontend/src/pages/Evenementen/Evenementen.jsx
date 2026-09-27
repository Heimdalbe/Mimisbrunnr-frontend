import { useState } from 'react';
import EventList from '../../components/Evenementen/EventList/EventList';
//import events from "../../api/events";
import UpcomingEvent from '../../components/Evenementen/EventCard/UpcomingEvent';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ChipList from '../../components/Common/Chip filter/ChipList';
import useSWR from 'swr';
import { getAll } from '../../api';
import AsyncData from '../../components/Common/AsyncData/AsyncData';

//TODO: Events uit het verleden niet meer tonen (waarschijnlijk best in backend uitfilteren)

const Evenementen = () => {
  const [selectedChips, setSelectedChips] = useState([]);

  const query = selectedChips.length 
    ? `events/pub?categories=${selectedChips.join(',')}` 
    : 'events/pub';

  const { data: data = { events: [] }, isLoading: eventsAreLoading, error: eventsError } = useSWR(query, getAll);
  const { data: allEventsData = { events: [] }, isLoading: allEventsAreLoading, error: allEventsError } = useSWR('events/pub', getAll);
  var upcomingEvent = allEventsData?.events?.[0];

  const chips = [
    {
      id: 1,
      value: 'SPORT',
      label: 'Sport',
      icon: 'fa-football',
    },
    {
      id: 2,
      value: 'CULTUUR',
      label: 'Cultuur',
      icon: 'fa-puzzle-piece',
    },
    {
      id: 3,
      value: 'SCHACHTEN',
      label: 'Schachten',
      icon: 'fa-child-reaching',
    },
    {
      id: 4,
      value: 'FEESTENLAN',
      label: 'Feest&LAN',
      icon: 'fa-music',
    },
  ];

  const toggleChip = (value) => {
    setSelectedChips((prev) => (prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]));
  };

  const clearChips = () => setSelectedChips([]);

  return (
    <div>
      <div className="container-sm-tm">
        <Breadcrumbs children={[{ link: 'evenementen', isLast: true }]} />
        <AsyncData loading={allEventsAreLoading} error={allEventsError}>
          {upcomingEvent && <UpcomingEvent id={upcomingEvent.id} />}
        </AsyncData>
        <ChipList chips={chips} selected={selectedChips} onToggle={toggleChip} onClear={clearChips} />
      </div>
      <div className="container-fw-mobile" style={{ paddingTop: '10px', marginBottom: '80px' }}>
        <AsyncData loading={eventsAreLoading} error={eventsError}>
          <EventList events={data.events} />
        </AsyncData>
      </div>
    </div>
  );
};

export default Evenementen;
