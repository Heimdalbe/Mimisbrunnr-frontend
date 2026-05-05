import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import { Form } from 'react-router';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import MemberForm from '../../../../components/Admin/Praesidium/MemberTable/MemberForm';
import PraesidiumRoleForm from '../../../../components/Admin/Praesidium/RolesTable/PraesidiumRoleForm';

const AdminNewPraesidiumRole = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'functies' }, { link: 'new', isLast: true }]} />
      <PraesidiumRoleForm />
    </div>
  );
};

export default AdminNewPraesidiumRole;