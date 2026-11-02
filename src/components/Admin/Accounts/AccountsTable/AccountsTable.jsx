import { Link } from 'react-router';

const AccountsTable = ({ accounts = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Gebruikersnaam</th>
          <th>Voornaam</th>
          <th>Familienaam</th>
          <th>Rollen</th>
          <th>Wachtwoord</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((a) => (
          <tr key={a.id}>
            <td>
              <Link to={`/admin/accounts/${a.id}`}>{a.name}</Link>
            </td>
            <td>{a.firstName || '—'}</td>
            <td>{a.lastName || '—'}</td>
            <td>
              <Link to={`/admin/accounts/${a.id}/roles`}>Rollen beheren</Link>
            </td>
            <td>
              <Link to={`/admin/accounts/${a.id}/password`}>Wachtwoord</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountsTable;
