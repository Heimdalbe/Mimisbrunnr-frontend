import { useParams } from "react-router";
import events from "../../../api/events";
import PrimaryButton from "../../../components/Common/PrimaryButton/PrimaryButton";
import EventList from "../../../components/Evenementen/EventList/EventList";
import "./EventDetail.css";

import useSWR from "swr";
import { getAll } from "../../../api";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import SponsorList from "../../../components/Home/SponsorSectie/Sponsors/SponsorList";

const EventDetail = () => {
  const { id } = useParams();
  const { data: event = {}, error: eventError, isLoading: eventIsLoading } = useSWR(`events/pub/${id}`, getAll);
  const { data: data = { events: [] }, error: eventsError, isLoading: eventsAreLoading } = useSWR(`events/pub?take=4`, getAll);
  var date = new Date(event.start);
  var start_time = date.toLocaleTimeString();
  var banner = event.banner;

  return (
    <div className="container-sm-tm test">
      {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
      <AsyncData loading={eventIsLoading} error={eventError}>
        <img className="background" src="../../../../public/BackgroundImg.png"></img>
        <div className="img-card-wrapper">
          <img className="event-img" src={banner?.url} alt={banner?.alt} />
          <div className="event-name">{event.name}</div>
          <div className="info-card">
            <div className="icon-info">
              <i class="fa-solid fa-user-group"></i>
              {event.accessibility === "OPEN" ?
                <span>Iedereen welkom</span> :
                <span>Heimies</span>
              }
            </div>
            <div className="icon-info">
              <i class="fa-solid fa-calendar-days"></i>
              <span>{date.toLocaleDateString()}</span>
            </div>
            <div className="icon-info">
              <i class="fa-solid fa-clock"></i>
              <span>{start_time}</span>
            </div>
            <div className="icon-info">
              <i class="fa-solid fa-location-dot"></i>
              <span>{event.location}</span>
            </div>
            {event.iCal && <div className="icon-info">
              <i className="fa-solid fa-link"></i>
              <span>
                <a href={event.iCal}>iCal-link</a>
              </span>
            </div>}
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
        {event.sponsors?.length > 0 &&
          <div className="sponsor-section">
            <h1>Sponsors</h1>
            <p>Met dank aan onze sponsors :</p>
            <SponsorList sponsors={event.sponsors} />
          </div>
        }
      </AsyncData>
      <AsyncData loading={eventsAreLoading} error={eventsError}>
        <div className="interesting-section">
          <h1>Ook interessant...</h1>
          <EventList events={data.events} limit={true} />
          <div className="button-div">
            <PrimaryButton
              isLight={true}
              text={"Alle evenementen"}
              to={"/evenementen"}
            />
          </div>
        </div>
      </AsyncData>
    </div>
  );
};

export default EventDetail;
