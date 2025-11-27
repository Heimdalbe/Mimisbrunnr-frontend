const Sponsor = ({ logo, url }) => {
  return (
    <a href={url}>
      <img src={logo} />
    </a>
  )
}

export default Sponsor;