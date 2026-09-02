import { FaCheck, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router';

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
        </tr>
      </thead>
      <tbody>
        {events.map((e) => (
          <tr>
            <td>
              <Link to={`/admin/events/${e.id}`}>{e.name}</Link>
            </td>
            <td>{e.category}</td>
            <td>{e.start}</td>
            <td>{e.end}</td>
            <td>{e.accessibility}</td>
            <td>{e.published ? <FaCheck /> : <FaXmark />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
