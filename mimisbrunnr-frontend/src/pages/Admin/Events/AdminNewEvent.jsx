import EventForm from '../../../components/Admin/Events/EventForm/EventForm';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';

const AdminNewEvent = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'events' }, { link: 'new', isLast: true }]} />

      <h1>Album Toevoegen</h1>
      <EventForm action={'post'} />
    </div>
  );
};

export default AdminNewEvent;
