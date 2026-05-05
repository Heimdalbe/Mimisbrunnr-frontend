import { tr } from "motion/react-client";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

const AlbumTable = ({ albums }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Datum</th>
          <th>Gedeeld</th>
          <th>Afbeeldingen</th>
        </tr>
      </thead>
      <tbody>
        {
          albums.map((a) =>
            <tr>
              <td><Link to={`/admin/albums/${a.id}`}>{a.name}</Link></td>
              <td>{a.date}</td>
              <td>{a.published ? <FaCheck /> : <FaXmark />}</td>
              <td><Link to={`/admin/albums/${a.id}/images`}>Afbeeldingen</Link></td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default AlbumTable;