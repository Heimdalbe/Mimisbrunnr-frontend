import SchildInfo from './SchildInfo/SchildInfo';
import './SchildSectie.css';

const SchildSectie = () => {
  return (
    <div className="dark-bg schild-sectie">
      <img src="./BackgroundImg1.webp" alt="Generieke achtergrond foto." className="bg-image" />
      <div className="container">
        <SchildInfo />
      </div>
    </div>
  );
};

export default SchildSectie;
