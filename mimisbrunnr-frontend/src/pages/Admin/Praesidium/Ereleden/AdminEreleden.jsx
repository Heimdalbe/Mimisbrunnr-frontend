import useSWR from 'swr';
import PraesidiumMemberTable from '../../../../components/Admin/Praesidium/MemberTable/MemberTable';
import { getAll } from '../../../../api';
import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminEreleden = () => {
  const { data = { erelids: [] }, error, isLoading } = useSWR('praesidium/erelids', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'ereleden', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/ereleden/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <PraesidiumMemberTable members={data.erelids} hasYear={false} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminEreleden;