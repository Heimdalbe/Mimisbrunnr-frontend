import { Form, useNavigate } from 'react-router';
import './EventForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';

const EventForm = ({ id = undefined, event = {} }) => {
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
        name: event.name || '',
        date: event.date || '',
        coverImage: event.coverImage?.url || '',
        description: event.description || '',
        published: event.published || false,
      });
    }
  }, [event, isEditMode]);

  const { trigger: handleSave, isMutating } = useSWRMutation('events', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('events', deleteById);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSave({
      id: id,
      ...formData,
    });

    navigate('/admin/events');
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    await handleDelete(id);
    navigate('/admin/events');
  }

  return (
    <Form onSubmit={handleSubmit} className="event-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Datum
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <label>
        Cover Afbeelding
        <input type="url" name="coverImage" value={formData.coverImage} onChange={handleChange} />
      </label>

      {formData.coverImage && <img src={formData.coverImage} alt="preview" style={{ width: 100 }} />}

      <label>
        Beschrijving
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>

      {isEditMode && (
        <label>
          Gedeeld
          <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
        </label>
      )}

      <div>
        {isEditMode && (
          <button type="button" className="delete" onClick={onDelete} disabled={isDeleting}>
            Delete
          </button>
        )}

        <button
          type="reset"
          onClick={() =>
            setFormData({
              name: event.name || '',
              date: event.date || '',
              coverImage: event.coverImage?.url || '',
              description: event.description || '',
              published: event.published || false,
            })
          }
        >
          Reset
        </button>

        <button type="submit" disabled={isMutating}>
          {isMutating ? 'Saving...' : 'Save'}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;
