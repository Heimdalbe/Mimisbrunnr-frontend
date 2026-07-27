import useSWR from "swr";
import AsyncData from "../Common/AsyncData/AsyncData";
import { getAll } from "../../api";
import SocialsList from "../Socials/SocialsList";

const UserOverlay = ({ id, setShowOverlay, endpoint }) => {
  const { data: user = {}, error: userError, isLoading: userIsLoading } = useSWR(`${endpoint}/${id}`, getAll);

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
            {/* Quote of andere leuke weetjes,... evt nog aanpassen en apart componentje van maken */}
            <h3 className="quote">{`"${user.member?.quote}"`}</h3>
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
    </div>)
};

export default UserOverlay;