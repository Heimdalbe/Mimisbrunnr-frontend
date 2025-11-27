import NuttigeLink from "./NuttigeLink";
import './NuttigeLink.css';

const NuttigeLinks = () => {
  return (
    <div className="nuttige-links">
      <NuttigeLink link={"/"} text={"Home"} />
      <NuttigeLink link={"/over-ons"} text={"Over ons"} />
      <NuttigeLink link={"/evenementen"} text={"Events"} />
      <NuttigeLink link={"/praesidium"} text={"Praesidium"} />
      <NuttigeLink link={"/leden"} text={"Leden"} />
    </div>
  )
}

export default NuttigeLinks;