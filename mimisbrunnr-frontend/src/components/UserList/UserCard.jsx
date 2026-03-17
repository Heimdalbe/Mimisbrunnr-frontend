import "./UserItems.css";

const UserCard = ({ name, role, img }) => {
  return (
    <div className="user-card">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;
