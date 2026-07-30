import useSWR from "swr";
import { getAll } from "../../../api";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import UserList from "../../../components/UserList/UserList";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const Ereleden = () => {
  const { data: praesidium = { erelids: [] }, praesidiumError, praesidiumIsLoading } = useSWR(`praesidium/erelids`, getAll);

  return (
    <div className="container-sm-tm">
      <Breadcrumbs children={[{ link: "praesidium" }, { link: "ereleden", isLast: true }]} />
      <h1>Ereleden</h1>
      <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
        <UserList users={praesidium.erelids} endpoint={"praesidium/erelids"} />
      </AsyncData>
    </div>
  );
}

export default Ereleden;