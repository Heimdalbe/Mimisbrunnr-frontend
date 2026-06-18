const Sponsor = ({ logo, url }) => {
  return (
    <a href={url}>
      <img src={logo.url} />
    </a>
  )
}

export default Sponsor;