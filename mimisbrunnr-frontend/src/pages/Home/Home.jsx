import SchildSectie from "../../components/Home/SchildSectie/SchildSectie";
import PlanningSectie from "../../components/Home/PlanningSectie/PlanningSectie";
import KarakteristiekenSectie from "../../components/Home/KarakteristiekenSectie/KarakteristiekenSectie";
import FotoSectie from "../../components/Home/FotoSectie/FotoSectie";
import VisieEnSponSectie from "../../components/Home/VisieEnSponSectie/VisieEnSponSectie";

const Home = () => {
  return (
    <div>
      <SchildSectie />
      <PlanningSectie />
      <div className="dark-bg">
        <KarakteristiekenSectie />
        <FotoSectie />
      </div>
      <VisieEnSponSectie />
    </div>
  )
}

export default Home;