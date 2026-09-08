import { post } from '../../../api';
import useSWRMutation from 'swr/mutation';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const AdminHome = () => {
  const { trigger } = useSWRMutation('identity/accounts/login', post);

  return (
    <div>
      <Breadcrumbs children={[{ link: 'admin', isLast: true }]} />
      <p>W admin panel ofzo iets</p>
    </div>
  );
};

export default AdminHome;
