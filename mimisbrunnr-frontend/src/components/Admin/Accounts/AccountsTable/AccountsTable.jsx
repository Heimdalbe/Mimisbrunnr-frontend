import { Link } from 'react-router';

const AccountsTable = ({ accounts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Wachtwoord</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((a) => (
          <tr>
            <td>
              <Link to={`/admin/accounts/${a.id}`}>{a.name}</Link>
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
