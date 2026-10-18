import useSWR from 'swr';
import { useParams } from 'react-router';
import { getAll } from '../../../api';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import AccountRolesForm from '../../../components/Admin/Accounts/AccountRolesForm/AccountRolesForm';

const AdminAccountRoles = () => {
  const { id } = useParams();
  const account = useSWR(`accounts/${id}`, getAll);
  const assigned = useSWR(`accounts/${id}/roles`, getAll);
  const available = useSWR('identity/roles', getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[
        { link: 'admin' },
        { link: 'accounts' },
        { link: `${account.data?.name ?? 'Account'} > Rollen`, isLast: true },
      ]} />
      <h1>Accountrollen beheren</h1>
      <AsyncData
        loading={account.isLoading || assigned.isLoading || available.isLoading}
        error={account.error || assigned.error || available.error}
      >
        {account.data && assigned.data && available.data && (
          <AccountRolesForm
            key={id}
            account={account.data}
            assigned={assigned.data}
            available={available.data}
            onSaved={(data) => assigned.mutate(data, false)}
          />
        )}
      </AsyncData>
    </div>
  );
};

export default AdminAccountRoles;
