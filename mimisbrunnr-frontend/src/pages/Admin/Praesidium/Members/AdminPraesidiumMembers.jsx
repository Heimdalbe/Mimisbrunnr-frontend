import useSWR from 'swr';
import PraesidiumMemberTable from '../../../../components/Admin/Praesidium/MemberTable/MemberTable';
import { getAll } from '../../../../api';
import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminPraesidiumMembers = () => {
  const { data = { praesidia: [] }, error, isLoading } = useSWR('praesidium/members', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'praesidiumleden', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/praesidiumleden/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <PraesidiumMemberTable members={data.praesidia} hasRole={true} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminPraesidiumMembers;