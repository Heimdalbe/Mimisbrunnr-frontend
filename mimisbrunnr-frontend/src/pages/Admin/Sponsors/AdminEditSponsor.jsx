import useSWR from 'swr';
import { getAll } from '../../../api';
import { useParams } from 'react-router';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import SponsorForm from '../../../components/Admin/Sponsors/SponsorForm/SponsorForm';

const AdminEditSponsor = () => {
  const { id } = useParams();
  const { data: sponsor = {}, error, isLoading } = useSWR(`sponsors/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'sponsors' }, { link: `${sponsor.name}`, isLast: true }]} />

        <h1>Sponsor Wijzigen</h1>
        <SponsorForm id={id} action={'put'} sponsor={sponsor} />
      </AsyncData>
    </div>
  );
};

export default AdminEditSponsor;
