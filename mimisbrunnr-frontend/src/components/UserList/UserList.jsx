import UserCard from "./UserCard.jsx";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <UserCard key={u.id} name={u.name} role={u.role} img={u.img} />
      ))}
    </div>
  );
};

export default UserList;
