import AlbumCard from "../AlbumCard/AlbumCard"
import './AlbumList.css';

const AlbumList = ({ albums = [] }) => {
  return (
    <div className="albums-wrapper">
      <h1>Albums</h1>

      <div className="album-grid">
        {
          albums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              date={album.date}
              coverImage={album.coverImage}
              published={album.published}
            />
          ))
        }
      </div>
    </div>
  )
}

export default AlbumList;