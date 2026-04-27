import EventList from '../../Evenementen/EventList/EventList';
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton';
import events from '../../../api/events';
import AsyncData from '../../Common/AsyncData/AsyncData';
import useSWR from 'swr';
import { getAll } from '../../../api';

const PlanningSectie = () => {
  const { data: data = { events: [] }, isLoading: eventsAreLoading, error: eventsError } = useSWR(`events/pub`, getAll);

  return (
    <div>
      <div className="container-sm-tm">
        <h1>Op de planning...</h1>
      </div>
      <AsyncData loading={eventsAreLoading} error={eventsError}>
        <div className='container-fw-mobile' style={{ paddingTop: 0, paddingBottom: 0 }}>
          <EventList events={data.events} limit={true} />
        </div>
      </AsyncData>
      <div className="container-sm-bm">
        <div className="button-wrapper">
          <PrimaryButton
            text='Alle evenementen'
            to='/evenementen'
            isLight={true}
            isDisabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanningSectie;
