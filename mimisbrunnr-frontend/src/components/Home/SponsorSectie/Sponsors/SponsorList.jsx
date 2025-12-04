import Sponsor from "./Sponsor";

const SponsorList = ({ sponsors }) => {
  return (
    <div className="sponsorlist-wrapper">
      <div className="sponsorlist marquee">
        {sponsors.map((s) => (
          <Sponsor key={s.di} logo={s.logo} url={s.url} />
        ))}
      </div>
    </div>
  )
}

export default SponsorList;