import useSWR from "swr";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import { Form, useParams } from "react-router";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import MemberForm from "../../../../components/Admin/Praesidium/MemberTable/MemberForm";

const AdminEditErelid = () => {
  const { id } = useParams();
  const { data: member = {}, error, isLoading } = useSWR(`praesidium/erelids/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'ereleden' }, { link: `${member.member?.firstName} ${member.member?.lastName}`, isLast: true }]} />
        <MemberForm endpoint={'praesidium/erelids'} id={id} member={member} />
      </AsyncData>
    </div>
  )
}

export default AdminEditErelid;