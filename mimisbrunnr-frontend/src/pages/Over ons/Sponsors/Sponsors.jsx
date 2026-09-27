import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import SponsorGrid from '../../../components/Sponsors/SponsorGrid/SponsorGrid';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import './Sponsors.css';

const Sponsors = () => {
  const { data: sponsors = { sponsors: [] }, sponsorError, sponsorsAreLoading } = useSWR('sponsors', getAll);

  return (
    <div className="sponsor-container">
      <div className="container-sm-tm sponsors-list">
        <Breadcrumbs children={[{ link: 'sponsors', isLast: true }]} />
        <h1>Onze Sponsors</h1>
        <AsyncData loading={sponsorsAreLoading} error={sponsorError}>
          <SponsorGrid sponsors={sponsors.sponsors} />
        </AsyncData>
      </div>
      <div className="new-sponsor-container">
        <div className="container-fw-mobile">
          <div>
            <h1>Sponsor worden?</h1>
            <p>Wenst u ook sponsor te worden? <br /> Of zou u meer te weten willen komen wat een eventuele samenwerking teweeg zou kunnen brengen?</p>
            <p>
              Contacteer ons! <br />
              <span className="sponsor-contact-email">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i> &nbsp;
                <a href="mailto:publicrelations@heimdal.be">publicrelations@heimdal.be</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
