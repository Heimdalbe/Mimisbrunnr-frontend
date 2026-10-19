import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';
import SocialTypesTable from '../../../components/Admin/SocialTypes/SocialTypesTable/SocialTypesTable';

const AdminSocialTypes = () => {
  const { data = {}, error, isLoading } = useSWR('socials/types', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'socialtypes', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/socialtypes/new'}>
        Toevoegen
      </Link>
      <AsyncData loading={isLoading} error={error}>
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <SocialTypesTable socialtypes={data.types} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminSocialTypes;
