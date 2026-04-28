import { Form } from "react-router";

const AlbumForm = ({ id, action }) => {
  return (
    <Form action={`albums/${id}`} method={action}>
      <input name="name" type="text" />
      <input name="date" type="date" />
      <input name="coverImage" type="file" accept="image/png, image/jpg" />
      <input name="published" type="checkbox" />
    </Form>
  )
}

export default AlbumForm;