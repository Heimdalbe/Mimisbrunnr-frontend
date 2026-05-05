import { useParams } from "react-router-dom";
import events from "../../../api/events";
import PrimaryButton from "../../../components/Common/PrimaryButton/PrimaryButton";
import EventList from "../../../components/Evenementen/EventList/EventList";
import "./EventDetail.css";

const EventDetail = () => {
  const { id } = useParams();
  const event = events[0];
  console.log(event);

  return (
    <div className="container-sm-tm">
      {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
      <div className="img-card-wrapper">
        <img className="event-img" src={event.image} alt={event.title} />
        <div className="info-card">
          <div className="icon-info">
            <i class="fa-solid fa-user-group"></i>
            <span>Iedereen welkom</span>
          </div>
          <div className="icon-info">
            <i class="fa-solid fa-calendar-days"></i>
            <span>{event.date.toLocaleDateString()}</span>
          </div>
          <div className="icon-info">
            <i class="fa-solid fa-clock"></i>
            <span>{event.start_time}</span>
          </div>
          <div className="icon-info">
            <i class="fa-solid fa-location-dot"></i>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <div className="description-section">
        <h1>Beschrijving</h1>
        <p>{event.description}</p>
        <div className="button-div">
          <PrimaryButton
            isLight={true}
            text={"Inschrijven"}
            to={`/evenementen/${id}/inschrijven`}
          />
        </div>
      </div>
      <div className="interesting-section">
        <h1>Ook interessant...</h1>
        <EventList events={events} limit={true} />
        <div className="button-div">
          <PrimaryButton
            isLight={true}
            text={"Alle evenementen"}
            to={"/evenementen"}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
