import useSWR from "swr";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import { Form, useParams } from "react-router";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import MemberForm from "../../../../components/Admin/Praesidium/MemberTable/MemberForm";

const AdminEditPraesidiumMember = () => {
  const { id } = useParams();
  const { data: member = {}, error, isLoading } = useSWR(`praesidium/members/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'praesidiumleden' }, { link: `${member.role?.name}(${member.year}-${member.year + 1})`, isLast: true }]} />
        <MemberForm endpoint={'praesidium/members'} id={id} member={member} />
      </AsyncData>
    </div>
  )
}

export default AdminEditPraesidiumMember;