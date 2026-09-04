import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';
import SocialTypesTable from '../../../components/Admin/SocialTypes/SocialTypesTable/SocialTypesTable';

const AdminSocialTypes = () => {
  const { data = {}, error, isLoading } = useSWR('socials/types', getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'socialtypes', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/socialtypes/new'}>
        Toevoegen
      </Link>
      <AsyncData loading={isLoading} error={error}>
        <SocialTypesTable socialtypes={data.types} />
      </AsyncData>
    </div>
  );
};

export default AdminSocialTypes;
