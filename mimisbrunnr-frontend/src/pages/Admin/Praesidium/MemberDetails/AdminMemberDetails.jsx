import useSWR from "swr";
import MemberDetailsTable from "../../../../components/Admin/Praesidium/MemberDetails/MemberDetailsTable";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import { Link } from "react-router";

const AdminMemberDetails = () => {
  const { data = { members: [] }, error, isLoading } = useSWR(`praesidium/memberdetails`, getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'ledengegevens', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/ledengegevens/new'}>Toevoegen</Link>
      <AsyncData loading={isLoading} error={error}>
        <MemberDetailsTable members={data.members} />
      </AsyncData>
    </div>
  )
}

export default AdminMemberDetails;