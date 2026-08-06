import { FaCheck, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router';

const PraesidiumMemberTable = ({ members, hasYear = true, hasRole = false }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          {hasYear && <th>Jaar</th>}
          {hasRole && <th>Functie</th>}
          <th>Naam</th>
          <th>Socials</th>
        </tr>
      </thead>
      <tbody>
        {members.map((m) => (
          <tr>
            <td>
              <Link to={`./${m.id}`}>{m.id}</Link>
            </td>
            {hasYear && (
              <td>
                {m.year}-{m.year + 1}
              </td>
            )}
            {hasRole && (
              <td>
                <Link to={`/admin/functies/${m.role?.id}`}>{m.role?.name}</Link>
              </td>
            )}
            <td>
              <Link to={`/admin/ledengegevens/${m.member?.id}`}>
                {m.member?.firstName} {m.member?.lastName}
              </Link>
            </td>
            <td>
              <Link to={`/admin/ledengegevens/${m.member?.id}/socials`}>Socials</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PraesidiumMemberTable;
