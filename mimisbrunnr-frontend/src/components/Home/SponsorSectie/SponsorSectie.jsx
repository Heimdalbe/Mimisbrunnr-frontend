import './SponsorSectie.css';
import SponsorList from './Sponsors/SponsorList';
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton';
import AsyncData from '../../Common/AsyncData/AsyncData';
import useSWR from 'swr';
import { getAll } from '../../../api'

const SponsorSectie = () => {
  const { data: sponsors = { sponsors: [] }, sponsorError, sponsorsAreLoading } = useSWR(`sponsors`, getAll);

  return (
    <div>
      <div className='container-sm-tm'>
        <h1 className='sponsor-titel'>Onze Sponsors</h1>
      </div>
      <AsyncData loading={sponsorsAreLoading} error={sponsorError}>
        <SponsorList sponsors={sponsors.sponsors} />
      </AsyncData>
      <div className='container-sm-bm sponsor-button'>
        <div className="button-wrapper">
          <PrimaryButton
            text='Meer info'
            to='/sponsors'
            isLight={true}
            isDisabled={false} />
        </div>
      </div>
    </div>
  )
}

export default SponsorSectie;