import MemberForm from '../../../../components/Admin/Praesidium/MemberTable/MemberForm';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';

const AdminNewPraesidiumMember = () => {

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'praesidiumleden' }, { link: 'new', isLast: true }]} />
      <MemberForm endpoint={'praesidium/members'} />
    </div>
  );
};

export default AdminNewPraesidiumMember;