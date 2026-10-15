import useSWR from 'swr';
import AsyncData from '../Common/AsyncData/AsyncData';
import { getAll } from '../../api';
import SocialsList from '../Socials/SocialsList';

const UserOverlay = ({ id, setShowOverlay, endpoint }) => {
  const { data: user = {}, error: userError, isLoading: userIsLoading } = useSWR(`${endpoint}/${id}`, getAll);

  let previousTermsResponse, previousTermsError, previousTermsIsLoading;
  let nextTermsResponse, nextTermsError, nextTermsIsLoading;
  let allTermsResponse, allTermsError, allTermsIsLoading;

  if (endpoint.endsWith('lustrum/members') || endpoint.endsWith('erelids') || endpoint.endsWith('superschachts')) {
    previousTermsResponse = [];
    nextTermsResponse = [];
    ({
      data: allTermsResponse,
      error: allTermsError,
      isLoading: allTermsIsLoading,
    } = useSWR(`praesidium/members/terms/${user.member?.id}`, getAll));
  } else {
    allTermsResponse = [];
    ({
      data: previousTermsResponse,
      error: previousTermsError,
      isLoading: previousTermsIsLoading,
    } = useSWR(`praesidium/members/previous/${id}`, getAll));

    ({
      data: nextTermsResponse,
      error: nextTermsError,
      isLoading: nextTermsIsLoading,
    } = useSWR(`praesidium/members/next/${id}`, getAll));
  }

  const quote = user.member?.quote?.trim();
  const trivia = user.member?.trivia?.trim();
  const birthDate = user.member?.birthDate;
  const studieRichting = user.member?.studieRichting?.trim();
  const favoriteGame = user.member?.favoriteGame?.trim();
  const favoriteHeimdal = user.member?.favoriteHeimdal?.trim();

  const previousTerms = (previousTermsResponse?.previousPraesidiumTerms ?? []).map((f) => ({
    role: f.role?.name,
    year: f.year,
  }));
  const nextTerms = (nextTermsResponse?.nextPraesidiumTerms ?? []).map((f) => ({
    role: f.role?.name,
    year: f.year,
  }));
  const allTerms = (allTermsResponse?.allPraesidiumTerms ?? []).map((f) => ({
    role: f.role?.name,
    year: f.year,
  }));

  const TermsSection = ({ title, terms, className, isLoading, error }) => (
    <AsyncData loading={isLoading} error={error}>
      {terms.length > 0 && (
        <div className={`terms ${className}`}>
          <h3 className="terms-title">{title}</h3>
          <ul className="terms-list">
            {terms.map((term) => (
              <li key={`${term.role}-${term.year}`}>
                <span className="term-role">{term.role}</span>
                <span className="term-year">
                  {term.year}-{term.year + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </AsyncData>
  );

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

            <TermsSection
              title="Vorige functies"
              className="previous-terms"
              terms={previousTerms}
              isLoading={previousTermsIsLoading}
              error={previousTermsError}
            />
            <TermsSection
              title="Volgende functies"
              className="next-terms"
              terms={nextTerms}
              isLoading={nextTermsIsLoading}
              error={nextTermsError}
            />
            <TermsSection
              title="Praesidium functies"
              className="all-terms"
              terms={allTerms}
              isLoading={allTermsIsLoading}
              error={allTermsError}
            />

            {quote && <h3 className="quote">{`"${quote}"`}</h3>}
            {trivia && <h3 className="trivia">{`${trivia}`}</h3>}

            <div className="fun-facts">
              {birthDate && (
                <div className="praesidium-info-icon">
                  <i className="fa-solid fa-cake-candles"></i>
                  <p>{birthDate}</p>
                </div>
              )}
              {studieRichting && (
                <div className="praesidium-info-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <p>{studieRichting}</p>
                </div>
              )}
              {favoriteGame && (
                <div className="praesidium-info-icon">
                  <i className="fa-solid fa-gamepad"></i>
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
          <SocialsList socials={user.member?.socials} />
        </div>
      </div>
    </div>
  );
};

export default UserOverlay;
