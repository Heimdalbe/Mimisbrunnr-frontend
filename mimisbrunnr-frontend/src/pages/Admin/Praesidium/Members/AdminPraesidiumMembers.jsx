import useSWR from "swr";
import PraesidiumMemberTable from "../../../../components/Admin/Praesidium/MemberTable/MemberTable";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router";

const AdminPraesidiumMembers = () => {
  const { data = { praesidia: [] }, error, isLoading } = useSWR(`praesidium/members`, getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'praesidiumleden', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/praesidiumleden/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <PraesidiumMemberTable members={data.praesidia} hasRole={true} />
      </AsyncData>
    </div>
  )
}

export default AdminPraesidiumMembers;