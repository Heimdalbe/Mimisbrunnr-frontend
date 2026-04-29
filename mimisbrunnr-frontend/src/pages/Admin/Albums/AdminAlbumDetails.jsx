import useSWR from "swr";
import AlbumForm from "../../../components/Admin/Albums/AlbumsForm/AlbumForm";
import { getAll } from "../../../api";
import { useParams } from "react-router";

const AdminAlbumDetails = () => {
  const { id } = useParams();
  const { data: album = {}, albumError, albumsisLoading } = useSWR(`albums/${id}`, getAll);

  return (
    <div>
      {album.id}
      {album.name}
    </div>
  )
}

export default AdminAlbumDetails;