import icon from './jormungandr-loader.png';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader" role="status">
      <img src={icon} alt="" width="64" height="64" />
      <span className="loader-label">Bezig met laden</span>
    </div>
  );
}
