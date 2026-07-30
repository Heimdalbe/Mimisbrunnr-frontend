import MemberDetailsForm from '../../../../components/Admin/Praesidium/MemberDetails/MemberDetailsForm';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';

const AdminNewMemberDetails = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'ledengegevens' }, { link: 'new', isLast: true }]} />
      <MemberDetailsForm memberDetails={{}} />
    </div>
  );
};

export default AdminNewMemberDetails;