import './SponsorSectie.css';
import SponsorList from './Sponsors/SponsorList';
import PrimaryButton from '../../Common/PrimaryButton';
import sponsors from '../../../api/sponsors';

const SponsorSectie = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='sponsor-titel'>Onze Sponsors</h1>
      </div>
      <SponsorList sponsors={sponsors} />
      <div className='container-sm-bm'>
        <div className="button-wrapper">
          <PrimaryButton 
            text='Meer info' 
            to='/evenementen' 
            isLight={true}
            isDisabled={false} />
        </div>
      </div>
    </div>
  )
}

export default SponsorSectie;