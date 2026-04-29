import useSWR from "swr";
import { getAll, post } from "../../../api";
import useSWRMutation from "swr/mutation";

const AdminHome = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(`identity/accounts/login`, post);

  return (
    <div>
      <button onClick={e => trigger({ email: "", password: "" })}>Login</button>
    </div>
  );
}

export default AdminHome;