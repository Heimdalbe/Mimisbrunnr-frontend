import LoadingImage from '../../Common/LoadingImage/LoadingImage';
import './UpcomingEvent.css';
import EventIcon from '../Andere/EventIcon';
import Countdown from '../Andere/Countdown';
import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../Common/AsyncData/AsyncData';
import { useNavigate } from 'react-router-dom';

const UpcomingEvent = ({ id }) => {
  const { data: event = {}, error: eventError, isLoading: eventIsLoading } = useSWR(`events/pub/${id}`, getAll);
  const maxDescriptionLength = 260;
  const safeDescription = event.description ?? '';
  const limitedDescription =
    safeDescription.length > maxDescriptionLength
      ? `${safeDescription.slice(0, maxDescriptionLength).trimEnd()}...`
      : safeDescription;
  var date = new Date(event.start);
  const navigate = useNavigate();

  return (
    <div className="event-wrapper" onClick={() => navigate(`/evenementen/${id}`)}>
      <AsyncData error={eventError} loading={eventIsLoading}>
        <div className="event-info-section">
          <div>
            <h1 className="title-and-icon">
              {event.name}{'\u2060'}
              <EventIcon category={event.category} />
            </h1>
            <h2 className="location">{event.location}</h2>
            <p>
              {limitedDescription} &nbsp;
              <a href={`/evenementen/${id}#beschrijving`} onClick={(clickEvent) => clickEvent.stopPropagation()}>
                Lees meer...
              </a>
            </p>
          </div>
          <Countdown date={date} />
        </div>
        <div className="event-image-section">
          <LoadingImage src={event.banner?.url} alt={event.banner?.alt ?? 'Foto van ' + event.name} className="image" />
        </div>
      </AsyncData>
    </div>
  );
};

export default UpcomingEvent;
