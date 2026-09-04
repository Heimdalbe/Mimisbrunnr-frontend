import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import EventTable from '../../../components/Admin/Events/EventTable/EventTable';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminEvents = () => {
  const { data = {}, error, isLoading } = useSWR('events', getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'events', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/events/new'}>
        Toevoegen
      </Link>
      <AsyncData loading={isLoading} error={error}>
        <EventTable events={data.events} />
      </AsyncData>
    </div>
  );
};

export default AdminEvents;
