import { Link, useLocation } from 'react-router-dom';
import './AlbumCard.css';
import capitalize from '../../../utils/capitalize';
import LoadingImage from '../../Common/LoadingImage/LoadingImage';

const AlbumCard = ({ id, name, date, coverImage, loading }) => {
  const { search } = useLocation();
  const d = new Date(date);
  const month = capitalize(d.toLocaleString('nl-BE', { month: 'long' }));
  const year = d.getFullYear();

  return (
    <Link className="album-card" to={{ pathname: `/albums/${id}`, search }}>
      <LoadingImage className="album-cover" src={coverImage?.thumbnailUrl || coverImage?.url}
        fallbackSrc={coverImage?.url} alt={`Cover van ${name}`} loading={loading} />
      <div className="album-info">
        <h3>{name}</h3>
        <div className="date">
          <p className="month">{month}</p>
          <p className="year">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
