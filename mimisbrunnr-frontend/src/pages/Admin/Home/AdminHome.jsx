import { post } from '../../../api';
import useSWRMutation from 'swr/mutation';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const AdminHome = () => {
  const { trigger } = useSWRMutation('identity/accounts/login', post);

  return (
    <div>
      <Breadcrumbs children={[{ link: 'admin', isLast: true }]} />
      <button onClick={() => trigger({ email: 'praeses@heimdal.be', password: 'A1b2C3!' })}>Login</button>
    </div>
  );
};

export default AdminHome;