import useSWRMutation from "swr/mutation";
import { deleteById } from "../../../api";

const AlbumImage = ({ albumId, id, url, description, mutate }) => {
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation(`albums/${albumId}/images`, deleteById);

  async function onDelete() {
    //if (!window.confirm("Are you sure you want to remove this image?")) return;

    await handleDelete(id);
    await mutate();
  }

  return (
    <tr>
      <td>{url}</td>
      <td>{description}</td>
      <th><button disabled={isDeleting} onClick={e => onDelete()}><i className="fa-solid fa-trash" /></button></th>
    </tr>
  )
}

export default AlbumImage;