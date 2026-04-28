import useSWR from "swr";
import { getAll } from "../../../api";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import AlbumTable from "../../../components/Admin/Albums/AlbumTable/AlbumTable";

const AdminAlbums = () => {
  const { data = [], error, isLoading } = useSWR(`albums`, getAll);

  return (
    <div className="">
      <AsyncData loading={isLoading} error={error}>
        <AlbumTable albums={data.albums} />
      </AsyncData>
    </div>
  )
}

export default AdminAlbums;