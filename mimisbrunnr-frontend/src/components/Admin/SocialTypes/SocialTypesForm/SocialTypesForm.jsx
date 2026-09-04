import { Form, useNavigate } from 'react-router';
import './SocialTypesForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';

const SocialTypesForm = ({ id = undefined, socialtype = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: socialtype.name || '',
      });
    }
  }, [socialtype, isEditMode]);

  const { trigger: handleSave, isMutating } = useSWRMutation('socials/types', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('socials/types', deleteById);

  function handleChange(s) {
    const { name, value, type, checked } = s.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(s) {
    s.preventDefault();

    await handleSave({
      id: id,
      ...formData,
    });

    navigate('/admin/socialtypes');
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this social type?')) return;

    await handleDelete(id);
    navigate('/admin/socialtypes');
  }

  return (
    <Form onSubmit={handleSubmit} className="socialTypes-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

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
              name: socialtype.name || '',
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

export default SocialTypesForm;
