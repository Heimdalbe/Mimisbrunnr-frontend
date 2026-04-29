import { tr } from "motion/react-client";
import { Link } from "react-router";

const AlbumTable = ({ albums }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {
          albums.map((a) =>
            <tr>
              <td><Link to={`/admin/albums/${a.id}`}>{a.name}</Link></td>
              <td>{a.date}</td>
              <td>{a.published}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default AlbumTable;