import useSWR from "swr";
import { getAll, post } from "../../../api";
import useSWRMutation from "swr/mutation";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const AdminHome = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(`identity/accounts/login`, post);

  return (
    <div>
      <Breadcrumbs children={[{ link: 'admin', isLast: true }]} />
      <button onClick={e => trigger({ email: "praeses@heimdal.be", password: "A1b2C3!" })}>Login</button>
    </div>
  );
}

export default AdminHome;