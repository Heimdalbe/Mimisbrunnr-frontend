import useSWR from 'swr';
import EventForm from '../../../components/Admin/Events/EventForm/EventForm';
import { getAll } from '../../../api';
import { useParams } from 'react-router';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';

const AdminEditEvent = () => {
  const { id } = useParams();
  const { data: event = {}, error, isLoading } = useSWR(`events/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'events' }, { link: `${event.name}`, isLast: true }]} />

        <h1>Event Wijzigen</h1>
        <EventForm id={id} action={'put'} event={event} />
      </AsyncData>
    </div>
  );
};

export default AdminEditEvent;
