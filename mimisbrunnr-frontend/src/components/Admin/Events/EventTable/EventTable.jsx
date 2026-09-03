import { FaCheck, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router';

const formatDate = (date) => {
  return new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};

const EventTable = ({ events }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Categorie</th>
          <th>Start</th>
          <th>Einde</th>
          <th>Accessibility</th>
          <th>Published</th>
          <th>Sponsors</th>
        </tr>
      </thead>
      <tbody>
        {events.map((e) => (
          <tr>
            <td>
              <Link to={`/admin/events/${e.id}`}>{e.name}</Link>
            </td>
            <td>{e.category}</td>
            <td>{formatDate(e.start)}</td>
            <td>{formatDate(e.end)}</td>
            <td>{e.accessibility}</td>
            <td>{e.published ? <FaCheck /> : <FaXmark />}</td>
            <td>
              <Link to={`/admin/events/${e.id}/sponsors`}>Sponsors</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
