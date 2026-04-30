import useSWR from "swr";
import AlbumForm from "../../../components/Admin/Albums/AlbumsForm/AlbumForm";
import { getAll } from "../../../api";
import { useParams } from "react-router";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";

const AdminNewAlbum = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'albums' }, { link: `new`, isLast: true }]} />

      <h1>Album Toevoegen</h1>
      <AlbumForm action={'post'} />
    </div>
  )
}

export default AdminNewAlbum;