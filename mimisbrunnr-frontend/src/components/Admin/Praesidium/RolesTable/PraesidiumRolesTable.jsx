import { Link } from 'react-router';

const PraesidiumRolesTable = ({ roles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
        </tr>
      </thead>
      <tbody>
        {
          roles.map((m) =>
            <tr>
              <td><Link to={`./${m.id}`}>{m.name}</Link></td>
            </tr>,
          )
        }
      </tbody>
    </table >
  );
};

export default PraesidiumRolesTable;