import { Link } from 'react-router';
import { FaCheck, FaXmark } from 'react-icons/fa6';

const SponsorTable = ({ sponsors }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Website</th>
          <th>Home Pagina</th>
          <th>Sponsor Pagina</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        {sponsors.map((s) => (
          <tr>
            <td>
              <Link to={`/admin/sponsors/${s.id}`}>{s.name}</Link>
            </td>
            <td>
              <Link to={s.website}>{s.website}</Link>
            </td>
            <td>{s.onHomePage ? <FaCheck /> : <FaXmark />}</td>
            <td>{s.onSponsorPage ? <FaCheck /> : <FaXmark />}</td>
            <td>{s.order}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SponsorTable;
