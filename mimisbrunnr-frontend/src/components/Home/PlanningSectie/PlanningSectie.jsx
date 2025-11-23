import { Link } from 'react-router-dom';
import './PlanningSectie.css';
import EventList from '../../Evenementen/EventList/EventList';
import events from '../../../api/events';

const PlanningSectie = () => {
  return (
    <div className='sectie'>
      <h1>Op de planning</h1>
      <EventList events={events} />
      <div className='button-section'>
        <Link className='button-light event-button' to={"/evenementen"}>Alle evenementen</Link>
      </div>
    </div>
  )
}

export default PlanningSectie;