import useSWR from "swr";
import PraesidiumMemberTable from "../../../../components/Admin/Praesidium/MemberTable/MemberTable";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router";

const AdminSuperSchachten = () => {
  const { data = { schachts: [] }, error, isLoading } = useSWR(`praesidium/superschachts`, getAll);

  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'superschachten', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/superschachten/new'}>Toevoegen</Link>
      <AsyncData isLoading={isLoading} error={error} >
        <PraesidiumMemberTable members={data.schachts} />
      </AsyncData>
    </div>
  )
}

export default AdminSuperSchachten;