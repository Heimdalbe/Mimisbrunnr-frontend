import MemberForm from "../../../../components/Admin/Praesidium/MemberTable/MemberForm";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";

const AdminNewSuperSchacht = () => {

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'superschachten' }, { link: 'new', isLast: true }]} />
      <MemberForm endpoint={'praesidium/superschachts'} />
    </div>
  )
}

export default AdminNewSuperSchacht;