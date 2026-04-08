import albumdtos from "../../api/albums"; "../../api/albums"
import AlbumList from "../../components/Albums/AlbumList/AlbumList"

const Albums = () => {

  const albums = albumdtos;

  return (
    <div className="container-sm-tm">
      <AlbumList albums={albums} />
    </div>
  )
}

export default Albums;