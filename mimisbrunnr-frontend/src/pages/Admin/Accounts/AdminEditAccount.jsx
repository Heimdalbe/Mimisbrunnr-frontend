import useSWR from 'swr';
import { getAll } from '../../../api';
import { useParams } from 'react-router';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import AccountsForm from '../../../components/Admin/Accounts/AccountsForm/AccountsForm';

const AdminEditAccount = () => {
  const { id } = useParams();
  const { data: account = {}, error, isLoading } = useSWR(`accounts/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'accounts' }, { link: `${account.name}`, isLast: true }]} />

        <h1>Account Wijzigen</h1>
        <AccountsForm id={id} action={'put'} account={account} />
      </AsyncData>
    </div>
  );
};

export default AdminEditAccount;
