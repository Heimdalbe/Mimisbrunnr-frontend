import useSWR from "swr";
import { getAll } from "../../../api";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import UserList from "../../../components/UserList/UserList";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const Superschachten = () => {
  const { data: praesidium = { schachts: [] }, praesidiumError, praesidiumIsLoading } = useSWR(`praesidium/superschachts`, getAll);

  return (
    <div className="container-sm-tm">
      <Breadcrumbs children={[{ link: "praesidium" }, { link: "superschachten", isLast: true }]} />
      <h1>Super Schachten</h1>
      <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
        <UserList users={praesidium.schachts} endpoint={"praesidium/superschachts"} />
      </AsyncData>
    </div>
  );
};


export default Superschachten;