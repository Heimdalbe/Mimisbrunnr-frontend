const Strofe = ({ titel, lijnen }) => {
  return (
    <div>
      <h2>{titel}</h2>
      {lijnen.map((l, i) => (
        <p key={i}>{l}</p>
      ))}
    </div>
  );
};
export default Strofe;
