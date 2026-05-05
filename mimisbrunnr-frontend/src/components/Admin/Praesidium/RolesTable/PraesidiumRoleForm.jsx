import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router";
import useSWRMutation from "swr/mutation";
import { deleteById, save } from "../../../../api";
import './PraesidiumRoleForm.css';

const PraesidiumRoleForm = ({ id = undefined, role = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    order: '',
    email: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: role?.name || '',
        order: role?.order || 0,
        email: role?.email || '',
      });
    }
  }, [role]);

  const { trigger: handleSave, isMutating } = useSWRMutation('praesidium/roles', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('praesidium/roles', deleteById);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSave({
      id: id,
      ...formData,
    });

    navigate(-1);
  }

  async function onDelete() {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;

    await handleDelete(id);
    navigate(-1);
  }

  async function handleSelect(e) {
    setFormData({
      ...formData,
      ...e
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="role-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Volgorde
        <input type="number" name="order" value={formData.order} onChange={handleChange} />
      </label>

      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
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
          name: role?.name || '',
          order: role?.order || 0,
          email: role?.email || '',
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

export default PraesidiumRoleForm;