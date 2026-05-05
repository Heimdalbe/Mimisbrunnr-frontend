import MemberForm from "../../../../components/Admin/Praesidium/MemberTable/MemberForm";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";

const AdminNewErelid = () => {

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'ereleden' }, { link: 'new', isLast: true }]} />
      <MemberForm endpoint={'praesidium/erelids'} />
    </div>
  )
}

export default AdminNewErelid;