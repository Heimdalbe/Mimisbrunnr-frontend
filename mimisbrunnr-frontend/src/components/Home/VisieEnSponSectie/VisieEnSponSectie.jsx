import './VisieEnSponSectie.css';
import VisieSectie from './VisieSectie/VisieSectie';
import SponsorSectie from './SponsorSectie/SponsorSectie';
import sponsors from '../../../api/sponsors';

const VisieEnSponSectie = () => {
  return (
    <div>
      <VisieSectie />
      <SponsorSectie sponsors={sponsors} />
    </div>
  )
}

export default VisieEnSponSectie;