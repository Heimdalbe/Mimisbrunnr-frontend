const UserCard = ({ name, role, img }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{role}</p>
      <p>{img}</p>
    </div>
  );
};

export default UserCard;
