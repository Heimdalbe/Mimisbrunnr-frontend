import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PrimaryButton from '../../../components/Common/PrimaryButton/PrimaryButton';
import EventList from '../../../components/Evenementen/EventList/EventList';
import './EventDetail.css';

import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import SponsorList from '../../../components/Home/SponsorSectie/Sponsors/SponsorList';
import EventIcon from '../../../components/Evenementen/Andere/EventIcon';

const EventDetail = () => {
  const { id } = useParams();
  const { hash } = useLocation();
  const { data: event = {}, error: eventError, isLoading: eventIsLoading } = useSWR(`events/pub/${id}`, getAll);
  const {
    data: data = { events: [] },
    error: eventsError,
    isLoading: eventsAreLoading,
  } = useSWR('events/pub?take=4', getAll);
  var date = new Date(event.start);
  var endDate = new Date(event.end)
  var start_time = date.toLocaleTimeString().slice(-5);
  var end_time = endDate.toLocaleTimeString().slice(-5);
  var banner = event.banner;

  useEffect(() => {
    if (!eventIsLoading && hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [eventIsLoading, hash]);

  return (
    <>
    <div className="container-sm-tm">
      {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
      <AsyncData loading={eventIsLoading} error={eventError}>
        <div className="background-wrapper">
          <img className="background" src="../../../../BackgroundImg.png"></img>
        </div>
        <div className="img-card-wrapper">
          <div className="image-event">
            <img className="event-img" src={banner?.url} alt={banner?.alt} />
            <EventIcon category={event.category} />
          </div>
          <div className="wrapper-info-container">
            <div className="event-name-container">
              <div className="event-name">{event.name}</div>
              {/* TODO: opslaan in backend of inschrijvingen nog openstaan of niet */}
              <div className={`event-status ${date > new Date() ? 'open' : 'closed'}`}>
                {date > new Date() ? 'Open' : 'Gesloten'}
              </div>
            </div>
            <div className="info-card">
              <div className="icon-info">
                <i className="fa-solid fa-user-group"></i>
                {event.accessibility === 'OPEN' ? <span>Iedereen welkom</span> : <span>Heimies</span>}
              </div>
              <div className="icon-info">
                <i className="fa-solid fa-calendar-days"></i>
                <span>{date.toLocaleDateString('en-GB')}</span>
              </div>
              <div className="icon-info">
                <i className="fa-solid fa-clock"></i>
                <span>{start_time} - {end_time}</span>
              </div>
              <div className="icon-info">
                <i className="fa-solid fa-location-dot"></i>
                <div className='adres-info'>
                  <span>{event.location}</span>
                  {/* TODO: optie om een adres hieronder toe te voegen. Plaatsnaam vs adres */}
                  {/* <span className="location-adress">Klein Turkije 8, 9000 Gent</span> */}
                </div>
              </div>
              {event.iCal && (
                <div className="icon-info">
                  <i className="fa-solid fa-link"></i>
                  <span>
                    <a href={event.iCal}>iCal-link</a>
                  </span>
                </div>
              )}
              {event.entryFee && (
                <div className="icon-info">
                  <i className="fa-solid fa-money-bill"></i>
                  <span>€{event.entryFee}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="beschrijving" className="description-section">
          <h1>Beschrijving</h1>
          <p>{event.description}</p>
        </div>
        {event.url && event.url !== 'https://heimdal.be' && (
          <div className="button-div">
            <PrimaryButton
              isLight={true}
              text="Inschrijven"
              to={event.url}
            />
          </div>
        )}

        {event.sponsors?.length > 0 && (
          <div className="sponsor-section">
            <h1>Sponsors</h1>
            <p>Met dank aan onze sponsors :</p>
            <SponsorList sponsors={event.sponsors} />
          </div>
        )}
      </AsyncData>
      <h1 className="also-interesting-title">Ook interessant...</h1>
    </div>
    <AsyncData loading={eventsAreLoading} error={eventsError}>
        <div className="container-fw-mobile" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <EventList events={data.events} limit={true} />
        </div>
        <div className="container-sm-bm">
          <div className="button-div">
            <PrimaryButton isLight={true} text={'Alle evenementen'} to={'/evenementen'} />
          </div>
        </div>
    </AsyncData>
    </>
  );
};

export default EventDetail;
