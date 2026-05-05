import { tr } from "motion/react-client";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

const MemberDetailsTable = ({ members }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Socials</th>
        </tr>
      </thead>
      <tbody>
        {
          members.map((m) =>
            <tr>
              <td><Link to={`/admin/ledengegevens/${m.id}`}>{m.firstName} {m.lastName}</Link></td>
              <td><Link to={`/admin/ledengegevens/${m.id}/socials`}>Socials</Link></td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default MemberDetailsTable;