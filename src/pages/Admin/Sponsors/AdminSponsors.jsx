import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import SponsorTable from '../../../components/Admin/Sponsors/SponsorTable/SponsorTable';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminSponsors = () => {
  const { data = {}, error, isLoading } = useSWR('sponsors', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'sponsors', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/sponsors/new'}>
        Toevoegen
      </Link>
      <AsyncData loading={isLoading} error={error}>
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <SponsorTable sponsors={data.sponsors} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminSponsors;
