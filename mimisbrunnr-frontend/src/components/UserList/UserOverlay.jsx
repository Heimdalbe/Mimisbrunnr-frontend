import useSWR from 'swr';
import AsyncData from '../Common/AsyncData/AsyncData';
import { getAll } from '../../api';
import SocialsList from '../Socials/SocialsList';

const UserOverlay = ({ id, setShowOverlay, endpoint }) => {
  const { data: user = {}, error: userError, isLoading: userIsLoading } = useSWR(`${endpoint}/${id}`, getAll);
  const quote = user.member?.quote?.trim();
  const trivia = user.member?.trivia?.trim();
  const birthDate = user.member?.birthDate;
  const studieRichting = user.member?.studieRichting?.trim();
  const favoriteGame = user.member?.favoriteGame?.trim();
  const favoriteHeimdal = user.member?.favoriteHeimdal?.trim();

  return (
    <div className="overlay" onClick={() => setShowOverlay(false)}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <AsyncData loading={userIsLoading} error={userError}>
          <img
            className="overlay-image"
            src={user.image?.url}
            alt={`Foto van : ${user.member?.firstName} ${user.member?.lastName}`}
          />
          <div className="text-and-info praesidium-overlay-info">
            <h1>{`${user.member?.firstName} ${user.member?.lastName}`}</h1>
            {user.role?.name && (
              <h2 className="role">
                {user.role?.name} {user.year}-{user.year + 1}
              </h2>
            )}
            {/* TODO: hier nog vorige functies + functies nadien plaatsen? */}

            {quote && <h3 className="quote">{`"${quote}"`}</h3>}
            {trivia && <h3 className="trivia">{`${trivia}`}</h3>}

            {/* TODO: fun facts backend aanvullen en dit toevoegen. 
            Indien niet ingevuld -> NIET ZICHTBAAR ZOALS QUOTE */}
            <div className="fun-facts">
              {birthDate && (
                <div className="praesidium-info-icon">
                  <i class="fa-solid fa-cake-candles"></i>
                  <p>{birthDate}</p>
                </div>
              )}
              {studieRichting && (
                <div className="praesidium-info-icon">
                  <i class="fa-solid fa-graduation-cap"></i>
                  <p>{studieRichting}</p>
                </div>
              )}
              {favoriteGame && (
                <div className="praesidium-info-icon">
                  <i class="fa-solid fa-gamepad"></i>
                  <p>{favoriteGame}</p>
                </div>
              )}
              {favoriteHeimdal && (
                <div className="praesidium-info-icon">
                  <img className="praesidium-info-icon-image" src="/HeimieLoveIcon.svg" alt="Heimie Love" />
                  <p>{favoriteHeimdal}</p>
                </div>
              )}
            </div>
          </div>
        </AsyncData>

        <div className="button-bar">
          <div className="close-button" onClick={() => setShowOverlay(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          {/* Socials van de persoon doorgeven met props ipv defaults nu */}
          <SocialsList socials={user.member?.socials} />
        </div>
      </div>
    </div>
  );
};

export default UserOverlay;
