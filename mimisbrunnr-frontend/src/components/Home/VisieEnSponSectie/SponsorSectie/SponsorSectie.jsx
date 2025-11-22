import './SponsorSectie.css'
import SponsorList from './Sponsors/SponsorList';
import { Link } from 'react-router-dom';

//TODO: Link achter 'meer info' button aanvullen.

const SponsorSectie = ({ sponsors }) => {
  return (
    <div>
      <h1 className='sponsor-titel'>Onze Sponsors</h1>
      <SponsorList sponsors={sponsors} />
      <div className='info-button'>
        <Link className='button-light'>Meer info</Link>
      </div>
    </div>
  )
}

export default SponsorSectie;