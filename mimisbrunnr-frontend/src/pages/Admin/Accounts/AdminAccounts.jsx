import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AccountsTable from '../../../components/Admin/Accounts/AccountsTable/AccountsTable';

const AdminAccounts = () => {
  const { data = {}, error, isLoading } = useSWR('accounts', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'accounts', isLast: true }]} />
      <AsyncData loading={isLoading} error={error}>
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <AccountsTable accounts={data.accounts} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminAccounts;
