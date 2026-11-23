import { useNavigate } from 'react-router-dom';
import './AlbumCard.css';
import capitalize from '../../../utils/capitalize';
import LoadingImage from '../../Common/LoadingImage/LoadingImage';

const AlbumCard = ({ id, name, date, coverImage, loading }) => {
  const navigate = useNavigate();
  const d = new Date(date);
  const month = capitalize(d.toLocaleString('nl-BE', { month: 'long' }));
  const year = d.getFullYear();

  return (
    <div
      className="album-card"
      onClick={() => navigate(`/albums/${id}`)}
    >
      <LoadingImage className="album-cover" src={coverImage?.thumbnailUrl || coverImage?.url}
        fallbackSrc={coverImage?.url} alt={`Cover van ${name}`} loading={loading} />
      <div className="album-info">
        <h3>{name}</h3>
        <div className="date">
          <p className="month">{month}</p>
          <p className="year">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
