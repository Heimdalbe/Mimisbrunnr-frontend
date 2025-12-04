import SchildInfo from "./SchildInfo/SchildInfo";
import SocialsList from "../../Socials/SocialsList";
import './SchildSectie.css';

const SchildSectie = () => {
  return (
    <div className="dark-bg schild-sectie">
      <img src="./BackgroundImg1.png" alt="Generieke achtergrond foto." className="bg-image" />
      <div className="container">
        <SchildInfo />
      </div>

      <div className="socials-wrapper">
        <SocialsList />
      </div>
    </div>
  );
};

export default SchildSectie;
