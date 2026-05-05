import { useParams } from "react-router";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import useSWR from "swr";
import { getAll } from "../../../../api";
import MemberDetailsForm from "../../../../components/Admin/Praesidium/MemberDetails/MemberDetailsForm";

const AdminEditMemberDetails = () => {
  const { id } = useParams();
  const { data: member = {}, error, isLoading } = useSWR(`praesidium/memberdetails/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'ledengegevens' }, { link: `${member.firstName} ${member.lastName}`, isLast: true }]} />
        <MemberDetailsForm id={id} memberDetails={member} />
      </AsyncData>
    </div>
  )
}

export default AdminEditMemberDetails;