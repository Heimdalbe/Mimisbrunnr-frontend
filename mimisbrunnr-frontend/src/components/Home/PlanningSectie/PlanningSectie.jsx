import EventList from '../../Evenementen/EventList/EventList';
import PrimaryButton from '../../Common/PrimaryButton';
import events from '../../../api/events';

const PlanningSectie = () => {
  return (
    <div className='container'>
      <h1>Op de planning</h1>
      <EventList events={events} />
      <div className="button-wrapper">
        <PrimaryButton text='Alle evenementen' to='/evenementen' isLight={true} />
      </div>
    </div>
  )
}

export default PlanningSectie;