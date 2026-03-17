import UserCard from "./UserCard.jsx";
import "./UserItems.css";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((u) => (
        <UserCard key={u.id} name={u.name} role={u.role} img={u.img} />
      ))}
    </div>
  );
};

export default UserList;
