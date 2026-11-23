import AlbumCard from '../AlbumCard/AlbumCard';
import './AlbumList.css';

const AlbumList = ({ albums = [] }) => {
  return (
    <div className="albums-wrapper">
      <h1>Albums</h1>

      <div className="album-grid">
        {albums.map((album, index) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            name={album.name}
            date={album.date}
            coverImage={album.coverImage}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
