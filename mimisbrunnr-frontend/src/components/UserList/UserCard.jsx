import { useState, useEffect } from "react";
import "./UserItems.css";
import SocialsList from "../Socials/SocialsList";
import UserOverlay from "./UserOverlay";

const UserCard = ({ id, name, year = undefined, role = undefined, img, quote = "", socials, endpoint }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // useEffect pagina niet scrollable maken als er een overlay geopend is
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);

  return (
    <>
      <div className="user-card" onClick={() => setShowOverlay(true)}>
        <img src={img} alt={`Foto van ${name}`} />
        <div className="card-info">
          <p className="card-text">{name}</p>
          {role && <p className="card-text role">{role}</p>}
        </div>
      </div>

      {showOverlay && (<UserOverlay id={id} setShowOverlay={setShowOverlay} endpoint={endpoint} />
      )}
    </>
  );
};

export default UserCard;
