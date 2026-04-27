import UserCard from "./UserCard.jsx";
import "./UserItems.css";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((u) => (
        <UserCard
          key={u.id}
          name={`${u.member.firstName} ${u.member.lastName}`}
          year={u.year}
          role={u.role?.name}
          img={u.image.url}
          quote={u.member.quote}
          socials={u.member.socials}
        />
      ))}
    </div>
  );
};

export default UserList;
