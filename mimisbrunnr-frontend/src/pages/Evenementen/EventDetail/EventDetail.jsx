import { useParams } from "react-router";
import events from "../../../api/events";
import PrimaryButton from "../../../components/Common/PrimaryButton";
import EventList from "../../../components/Evenementen/EventList/EventList";
import "./EventDetail.css";

const EventDetail = () => {
  const { id } = useParams();
  const event = events[0];
  console.log(event);

  return (
    <div className="container-sm-tm">
      {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
      <div>
        <img src={`.${event.image}`} alt={event.title} />
      </div>
      <div className="description-section">
        <h1>Beschrijving</h1>
        <p>{event.description}</p>
        <PrimaryButton
          isLight={true}
          text={"Inschrijven"}
          to={`/evenementen/${id}/inschrijven`}
        />
      </div>
      <div className="interesting-section">
        <h1>Ook interessant...</h1>
        <EventList events={events} limit={true} />
        <PrimaryButton
          isLight={true}
          text={"Alle evenementen"}
          to={"/evenementen"}
        />
      </div>
    </div>
  );
};

export default EventDetail;
