import Sponsor from "./Sponsor";
import '../SponsorSectie.css'

const SponsorList = ({ sponsors }) => {
  return (
    <div className="sponsorlist">
      {sponsors.map((s) => (
        <Sponsor key={s.di} logo={s.logo} url={s.url} />
      ))}
    </div>
  )
}

export default SponsorList;