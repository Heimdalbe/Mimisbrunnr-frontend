import { Link } from 'react-router';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import { getAll } from '../../../../api';
import useSWR from 'swr';
import PraesidiumRolesTable from '../../../../components/Admin/Praesidium/RolesTable/PraesidiumRolesTable';

const AdminPraesidiumRoles = () => {
  const { data = { roles: [] }, error, isLoading } = useSWR('praesidium/roles', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'functies', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/functies/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <PraesidiumRolesTable roles={data.roles} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminPraesidiumRoles;