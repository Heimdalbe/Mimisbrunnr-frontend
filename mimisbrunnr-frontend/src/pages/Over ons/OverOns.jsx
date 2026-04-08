import SponsorSectie from "../../components/Home/SponsorSectie/SponsorSectie";
import VisieSectie from "../../components/Home/VisieSectie/VisieSectie";
import "./OverOns.css";

const OverOns = () => {
  return (
    <div>
      <div className="top-foto">
        <div className="top-text">
          <h1>Heimdal</h1>
        </div>
      </div>
      <div className="container over-ons">
        <h1>Over ons</h1>
        <p>Heimdal is een studentenvereniging gelinkt aan toegepaste informatica die zich richt op geeks en gamers. Waar je altijd jezelf mag zijn en je niet bang moet zijn om jezelf te uiten zoals je bent. Wij organiseren jaarlijks meerdere activiteiten in een geeky thema dus kom zeker eens af als dit je interesseert.</p>

        <div className="link-wrapper"><a className="link-button" href="https://discord.gg/6ZsU4wHqZ3">Join onze discord server!</a></div>
      </div>
      <VisieSectie />
      <SponsorSectie />
    </div >
  )
}

export default OverOns;