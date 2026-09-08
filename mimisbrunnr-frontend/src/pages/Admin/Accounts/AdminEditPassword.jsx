import useSWR from 'swr';
import { getAll } from '../../../api';
import { useParams } from 'react-router';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import EditPasswordForm from '../../../components/Admin/Accounts/EditPasswordForm/EditPasswordForm';

const AdminEditPassword = () => {
  const { id } = useParams();
  const { data: account = {}, error, isLoading } = useSWR(`accounts/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs
          children={[{ link: 'admin' }, { link: 'accounts' }, { link: `${account.name} > Wachtwoord`, isLast: true }]}
        />

        <h1>Wachtwoord Wijzigen</h1>
        <EditPasswordForm account={account} action={'put'} />
      </AsyncData>
    </div>
  );
};

export default AdminEditPassword;
