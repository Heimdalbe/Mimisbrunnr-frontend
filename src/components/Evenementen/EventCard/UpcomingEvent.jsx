import "./UpcomingEvent.css";
import EventIcon from "../Andere/EventIcon";
import Countdown from "../Andere/Countdown";
import useSWR from "swr";
import { getAll } from "../../../api";

const UpcomingEvent = ({
  id
}) => {
  const { data: event = {}, error: eventError, isLoading: eventIsLoading } = useSWR(`events/pub/${id}`, getAll);
  const maxDescriptionLength = 260;
  const safeDescription = event.description ?? "";
  const limitedDescription =
    safeDescription.length > maxDescriptionLength
      ? `${safeDescription.slice(0, maxDescriptionLength).trimEnd()}...`
      : safeDescription;
  var date = new Date(event.start);

  return (
    <div className="event-wrapper">
      <div className="info-section">
        <div>
          <div className="title-and-icon">
            <div>
              <h1>{event.name}</h1>
              <h2 className="location">{event.location}</h2>
            </div>
            <div>
              <EventIcon category={event.category} />
            </div>
          </div>
          <p>
            {limitedDescription}
            <a href={`evenementen/${id}`}> Lees meer...</a>
          </p>
        </div>
        <Countdown date={date} />
      </div>
      <img src={event.banner?.url} alt={event.banner?.alt ?? "Foto van " + event.name} className="image" />
    </div>
  );
};

export default UpcomingEvent;
