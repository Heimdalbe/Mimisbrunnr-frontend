import { useNavigate } from "react-router-dom";
import './AlbumCard.css';
import capitalize from "../../../utils/capitalize";

const AlbumCard = ({ id, name, date, coverImage = { url: "../../../../public/BackgroundImg.png" }, published }) => {
  const navigate = useNavigate();
  const d = new Date(date);
  const month = capitalize(d.toLocaleString("nl-BE", { month: "long" }));
  const year = d.getFullYear();

  return (
    <div
      className="album-card"
      style={{ backgroundImage: `url(${coverImage.url})` }}
      onClick={() => navigate(`/albums/${id}`)}
    >
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
