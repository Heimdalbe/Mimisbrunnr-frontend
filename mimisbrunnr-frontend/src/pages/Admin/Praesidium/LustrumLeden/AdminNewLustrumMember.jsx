import MemberForm from '../../../../components/Admin/Praesidium/MemberTable/MemberForm';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';

const AdminNewLustrumMember = () => {

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'lustrumleden' }, { link: 'new', isLast: true }]} />
      <MemberForm endpoint={'praesidium/lustrum/members'} />
    </div>
  );
};

export default AdminNewLustrumMember;