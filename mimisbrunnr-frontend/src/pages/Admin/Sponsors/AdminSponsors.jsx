import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import SponsorTable from '../../../components/Admin/Sponsors/SponsorTable/SponsorTable';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminSponsors = () => {
  const { data = {}, error, isLoading } = useSWR('sponsors', getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'sponsors', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/sponsors/new'}>
        Toevoegen
      </Link>
      <AsyncData loading={isLoading} error={error}>
        <SponsorTable sponsors={data.sponsors} />
      </AsyncData>
    </div>
  );
};

export default AdminSponsors;
