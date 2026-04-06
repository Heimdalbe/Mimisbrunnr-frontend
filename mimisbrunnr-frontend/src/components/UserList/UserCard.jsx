import { useState, useEffect } from "react";
import "./UserItems.css";
import SocialsList from "../Socials/SocialsList";

const UserCard = ({ name, role, img, quote }) => {
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
          <p className="card-text role">{role}</p>
        </div>
      </div>

      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="overlay-image"
              src={img}
              alt={`Foto van de ${role}: ${name}`}
            />
            <div className="text-and-info">
              <h1>{name}</h1>
              <h2 className="role">{role}</h2>
              {/* Quote of andere leuke weetjes,... evt nog aanpassen en apart componentje van maken */}
              <h3 className="quote">{`"${quote}"`}</h3>
            </div>
            <div className="button-bar">
              <div
                className="close-button"
                onClick={() => setShowOverlay(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
              {/* Socials van de persoon doorgeven met props ipv defaults nu */}
              <SocialsList />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
