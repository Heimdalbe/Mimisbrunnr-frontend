import useSWR from 'swr';
import AsyncData from '../Common/AsyncData/AsyncData';
import { getAll } from '../../api';
import SocialsList from '../Socials/SocialsList';

const UserOverlay = ({ id, setShowOverlay, endpoint }) => {
  const { data: user = {}, error: userError, isLoading: userIsLoading } = useSWR(`${endpoint}/${id}`, getAll);
  const quote = user.member?.quote?.trim();

  return (
    <div className="overlay" onClick={() => setShowOverlay(false)}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <AsyncData loading={userIsLoading} error={userError}>
          <img
            className="overlay-image"
            src={user.image?.url}
            alt={`Foto van : ${user.member?.firstName} ${user.member?.lastName}`}
          />
          <div className="text-and-info">
            <h1>{`${user.member?.firstName} ${user.member?.lastName}`}</h1>
            {user.role?.name && <h2 className="role">{user.role?.name} {user.year}-{user.year + 1}</h2>}
            {/* TODO: vorige functies of functies erna plaatsen hier nog? */}
            
            {quote && <h3 className="quote">{`"${quote}"`}</h3>}
            
            {/* TODO: backend aanvullen en dit toevoegen */}
            {/* <div className="fun-facts">
              <div className="praesidium-info-icon">
                <i class="fa-solid fa-cake-candles"></i>
                <p>19/09/2005</p>
              </div>
              <div className="praesidium-info-icon">
                <i class="fa-solid fa-graduation-cap"></i>
                <p>Toegepaste informatica - HOGENT</p>
              </div>
              <div className="praesidium-info-icon">
                <i class="fa-solid fa-gamepad"></i>
                <p>Game titel</p>
              </div>
              <div className="praesidium-info-icon">
                <img className="praesidium-info-icon-image" src="/HeimieLoveIcon.svg" alt="Heimie Love" />
                <p>Heimdalweekend</p>
              </div>
            </div> */}
            
          </div>
        </AsyncData>

        <div className="button-bar">
          <div
            className="close-button"
            onClick={() => setShowOverlay(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          {/* Socials van de persoon doorgeven met props ipv defaults nu */}
          <SocialsList socials={user.member?.socials} />
        </div>
      </div>
    </div>);
};

export default UserOverlay;