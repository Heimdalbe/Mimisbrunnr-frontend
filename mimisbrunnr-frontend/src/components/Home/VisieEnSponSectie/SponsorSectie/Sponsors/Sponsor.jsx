const Sponsor = ({ logo, url }) => {
  return (
    <div>
      <a href={url}>
        <img src={logo} />
      </a>
    </div>
  )
}

export default Sponsor;