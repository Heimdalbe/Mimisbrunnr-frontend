import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AccountsTable from '../../../components/Admin/Accounts/AccountsTable/AccountsTable';

const AdminAccounts = () => {
  const { data = {}, error, isLoading } = useSWR('accounts', getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'accounts', isLast: true }]} />
      <AsyncData loading={isLoading} error={error}>
        <AccountsTable accounts={data.accounts} />
      </AsyncData>
    </div>
  );
};

export default AdminAccounts;
