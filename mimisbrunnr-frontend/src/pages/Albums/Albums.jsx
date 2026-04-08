import { useState } from "react";
import albumdtos from "../../api/albums"; "../../api/albums"
import AlbumList from "../../components/Albums/AlbumList/AlbumList"
import Pagination from "../../components/Common/Pagination/Pagination";

const Albums = () => {

  const albumsPerPage = 12;
  const albums = albumdtos.albums;

  const [page, setPage] = useState(1);

  return (
    <div className="container-sm-tm">
      <AlbumList albums={albums} />
      <Pagination page={page} totalPages={Math.ceil(albumdtos.total / albumsPerPage)} onPageChange={setPage} />
    </div>
  )
}

export default Albums;