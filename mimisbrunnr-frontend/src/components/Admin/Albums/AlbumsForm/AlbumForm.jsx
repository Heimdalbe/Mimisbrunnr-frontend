import { Form, Link } from "react-router";
import './AlbumForm.css'
import { useRef, useState } from "react";
import useSWRMutation from "swr/mutation";
import { deleteById, save } from "../../../../api";
import PrimaryButton from "../../../Common/PrimaryButton/PrimaryButton";

const AlbumForm = ({ id = undefined, action, album = {} }) => {

  var [img, setImage] = useState(album?.coverImage?.url);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      date: formData.get('date'),
      coverImage: `aws/${formData.get('coverImage').name}`, /* Image uploaden naar AWS */
      published: formData.get('published') == 'on',
    }

    handleSave({ id: id, ...data })
  }

  const { trigger: handleSave, isMutating } = useSWRMutation(`albums`, save)
  const { trigger: handleDelete } = useSWRMutation(`albums`, deleteById)

  return (
    <Form onSubmit={handleSubmit} className="album-form">
      <label htmlFor="name">
        Name
        <input id="name" name="name" type="text" defaultValue={album?.name} />
      </label>
      <label htmlFor="date">
        Date
        <input id="data" name="date" type="date" defaultValue={album?.date} />
      </label>
      <label htmlFor="coverImage">
        Cover Image
        {action == 'put' &&
          <div>Huidige : <a href={img}>{img}</a></div>
        }
        <input id="coverImage" name="coverImage" type="file" accept="image/png, image/jpg" />
      </label>
      <label htmlFor="description">
        Description
        <input id="description" name="description" type="text" defaultValue={album?.description} />
      </label>
      <label htmlFor="published">
        Published
        <input id="published" name="published" type="checkbox" defaultChecked={album?.published} />
      </label>
      <div>
        {action == 'put' &&
          <Link className="delete" to={'/admin/albums'} onClick={e => handleDelete(id)}>Verwijderen</Link>
        }
        <button type="reset">Reset</button>
        <button type="submit">Opslaan</button>
      </div>
    </Form>
  )
}

export default AlbumForm;