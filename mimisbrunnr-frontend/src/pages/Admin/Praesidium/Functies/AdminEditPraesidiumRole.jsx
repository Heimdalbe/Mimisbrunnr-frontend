import useSWR from "swr";
import { getAll } from "../../../../api";
import AsyncData from "../../../../components/Common/AsyncData/AsyncData";
import { Form, useParams } from "react-router";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import MemberForm from "../../../../components/Admin/Praesidium/MemberTable/MemberForm";
import PraesidiumRoleForm from "../../../../components/Admin/Praesidium/RolesTable/PraesidiumRoleForm";

const AdminEditPraesidiumRole = () => {
  const { id } = useParams();
  const { data = {}, error, isLoading } = useSWR(`praesidium/roles/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'functies' }, { link: `${data.name}`, isLast: true }]} />
        <PraesidiumRoleForm id={id} role={data} />
      </AsyncData>
    </div>
  )
}

export default AdminEditPraesidiumRole;