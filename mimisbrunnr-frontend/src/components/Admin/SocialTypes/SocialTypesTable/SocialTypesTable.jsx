import { Link } from 'react-router';

const SocialTypesTable = ({ socialtypes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
        </tr>
      </thead>
      <tbody>
        {socialtypes.map((s) => (
          <tr>
            <td>
              <Link to={`/admin/socialtypes/${s.id}`}>{s.name}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SocialTypesTable;
