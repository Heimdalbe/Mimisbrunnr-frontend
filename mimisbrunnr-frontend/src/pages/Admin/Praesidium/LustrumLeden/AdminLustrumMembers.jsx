import useSWR from 'swr';
import PraesidiumMemberTable from '../../../../components/Admin/Praesidium/MemberTable/MemberTable';
import { getAll } from '../../../../api';
import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminLustrumMembers = () => {
  const { data = { lustrumLids: [] }, error, isLoading } = useSWR('praesidium/lustrum/members', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'lustrumleden', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/lustrumleden/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <PraesidiumMemberTable members={data.lustrumLids} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminLustrumMembers;