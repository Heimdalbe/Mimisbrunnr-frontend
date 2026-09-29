const Sponsor = ({ logo, url }) => {
  return (
    <a href={url} target="_blank">
      <img src={logo.url} />
    </a>
  );
};

export default Sponsor;
