import LoadingImage from '../../Common/LoadingImage/LoadingImage';
import './UpcomingEvent.css';
import EventIcon from '../Andere/EventIcon';
import Countdown from '../Andere/Countdown';
import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../Common/AsyncData/AsyncData';
import { useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';

const UpcomingEvent = ({ id }) => {
  const { data: event = {}, error: eventError, isLoading: eventIsLoading } = useSWR(`events/pub/${id}`, getAll);
  var date = new Date(event.start);
  const navigate = useNavigate();

  return (
    <div className="event-wrapper" onClick={() => navigate(`/evenementen/${id}`)}>
      <AsyncData error={eventError} loading={eventIsLoading}>
        <div className="event-info-section">
          <div>
            <div className="title-and-icon">
              <h1>{event.name}</h1>
              <EventIcon category={event.category} />
            </div>
            <h2 className="location">{event.location}</h2>
            <div className="upcoming-description">
              <div className="upcoming-description-preview">
                <Markdown skipHtml unwrapDisallowed allowedElements={['p', 'strong', 'em', 'code', 'br']}>
                  {event.description}
                </Markdown>
              </div>
              <a href={`/evenementen/${id}#beschrijving`} onClick={(clickEvent) => clickEvent.stopPropagation()}>
                Lees meer...
              </a>
            </div>
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
