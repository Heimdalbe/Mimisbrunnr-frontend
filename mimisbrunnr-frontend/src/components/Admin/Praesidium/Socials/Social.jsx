import useSWRMutation from "swr/mutation";
import { deleteById } from "../../../../api";

const Social = ({ memberId, id, type, url, mutate }) => {
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation(`members/${memberId}/socials`, deleteById);

  async function onDelete() {
    if (!window.confirm("Are you sure you want to remove this entry?")) return;

    await handleDelete(id);
    await mutate();
  }

  return (
    <tr>
      <td>{url}</td>
      <td>{type}</td>
      <th><button disabled={isDeleting} onClick={e => onDelete()}><i className="fa-solid fa-trash" /></button></th>
    </tr>
  )
}

export default Social;