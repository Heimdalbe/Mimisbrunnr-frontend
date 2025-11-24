import EventList from '../../Evenementen/EventList/EventList';
import PrimaryButton from '../../Common/PrimaryButton';
import events from '../../../api/events';

const PlanningSectie = () => {
  return (
    <div>
      <div className='container-sm-tm'>
        <h1>Op de planning...</h1>
      </div>
      <div className='container-fw-mobile' style={{ paddingTop: 0, paddingBottom: 0}}>
        <EventList events={events} />
      </div>
      <div className='container-sm-bm'>
        <div className="button-wrapper">
          <PrimaryButton 
            text='Alle evenementen' 
            to='/evenementen' 
            isLight={true}
            isDisabled={false} />
        </div>
      </div>
    </div>
  )
}

export default PlanningSectie;