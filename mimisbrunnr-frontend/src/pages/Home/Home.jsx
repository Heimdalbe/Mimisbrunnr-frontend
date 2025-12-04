import SchildSectie from "../../components/Home/SchildSectie/SchildSectie";
import PlanningSectie from "../../components/Home/PlanningSectie/PlanningSectie";
import KarakteristiekenSectie from "../../components/Home/KarakteristiekenSectie/KarakteristiekenSectie";
import FotoSectie from "../../components/Home/FotoSectie/FotoSectie";
import VisieSectie from "../../components/Home/VisieSectie/VisieSectie";
import SponsorSectie from "../../components/Home/SponsorSectie/SponsorSectie";

const Home = () => {
  return (
    <div>
      <SchildSectie />
      <PlanningSectie />
      <div className="dark-bg">
        <KarakteristiekenSectie />
        <FotoSectie />
      </div>
      <VisieSectie />
      <SponsorSectie />
    </div>
  )
}

export default Home;