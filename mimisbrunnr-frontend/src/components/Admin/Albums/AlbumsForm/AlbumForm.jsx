import { Form, useNavigate } from "react-router";
import './AlbumForm.css'
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import { deleteById, save } from "../../../../api";

const AlbumForm = ({ id = undefined, album = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    coverImage: '',
    description: '',
    published: false,
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: album.name || '',
        date: album.date || '',
        coverImage: album.coverImage?.url || '',
        description: album.description || '',
        published: album.published || false,
      });
    }
  }, [album]);

  const { trigger: handleSave, isMutating } = useSWRMutation(`albums`, save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation(`albums`, deleteById);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSave({
      id: id,
      ...formData,
    });

    navigate('/admin/albums');
  }

  async function onDelete() {
    if (!window.confirm("Are you sure you want to delete this album?")) return;

    await handleDelete(id);
    navigate('/admin/albums');
  }

  return (
    <Form onSubmit={handleSubmit} className="album-form">
      <label>
        Name
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Date
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <label>
        Cover Image
        <input type="url" name="coverImage" value={formData.coverImage} onChange={handleChange} />
      </label>

      {formData.coverImage && (
        <img src={formData.coverImage} alt="preview" style={{ width: 100 }} />
      )}

      <label>
        Description
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>

      <label>
        Published
        <input
          type="checkbox"
          name="published"
          checked={formData.published}
          onChange={handleChange}
        />
      </label>

      <div>
        {isEditMode && (
          <button
            type="button"
            className="delete"
            onClick={onDelete}
            disabled={isDeleting}
          >
            Delete
          </button>
        )}

        <button type="reset" onClick={() => setFormData({
          name: album.name || '',
          date: album.date || '',
          coverImage: album.coverImage?.url || '',
          description: album.description || '',
          published: album.published || false,
        })}>
          Reset
        </button>

        <button type="submit" disabled={isMutating}>
          {isMutating ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default AlbumForm;