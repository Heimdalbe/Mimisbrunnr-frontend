import useSWR from "swr";
import PraesidiumMemberTable from "../../../../components/Admin/Praesidium/MemberTable/MemberTable";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router";

const AdminEreleden = () => {
  const { data = { erelids: [] }, error, isLoading } = useSWR(`praesidium/erelids`, getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'ereleden', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/ereleden/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <PraesidiumMemberTable members={data.erelids} hasYear={false} />
      </AsyncData>
    </div>
  )
}

export default AdminEreleden;