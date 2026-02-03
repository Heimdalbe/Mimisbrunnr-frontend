import './UpcomingEvent.css';
import EventIcon from '../Andere/EventIcon';
import Countdown from '../Andere/Countdown';

const UpcomingEvent = ({ title, location, date, start_time, description, image, type }) => {
  return (
    <div className='event-wrapper'>
      <div className='info-section'>
        <div>
          <div className='title-and-icon'>
            <div>
              <h1>{title}</h1>
              <h2 className='location'>{location}</h2>
            </div>
            <div>
              <EventIcon category={type} />
            </div>
          </div>
          <p>
            {description}
            <a href="#">Lees meer...</a>
          </p>
        </div>
        <Countdown date={date} />
      </div>
      <div className='image-section'>
        <img src={image} alt={"Foto van " + title} className='image' />
      </div>
    </div>
  )
}

export default UpcomingEvent;
