import useSWR from "swr";
import AlbumForm from "../../../components/Admin/Albums/AlbumsForm/AlbumForm";
import { getAll } from "../../../api";
import { useParams } from "react-router";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";

const AdminEditAlbum = () => {
  const { id } = useParams();
  const { data: album = {}, error, isLoading } = useSWR(`albums/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'albums' }, { link: `${album.name}`, isLast: true }]} />

        <h1>Album Wijzigen</h1>
        <AlbumForm id={id} action={'put'} album={album} />
      </AsyncData>
    </div>
  )
}

export default AdminEditAlbum;