import { Form, useNavigate } from 'react-router';
import './AccountsForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';

const AccountsForm = ({ id = undefined, account = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: account.name || '',
        email: account.email || '',
      });
    }
  }, [account, isEditMode]);

  const { trigger: handleSave, isMutating } = useSWRMutation('accounts', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('accounts', deleteById);

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

    navigate('/admin/accounts');
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this account?')) return;

    await handleDelete(id);
    navigate('/admin/accounts');
  }

  return (
    <Form onSubmit={handleSubmit} className="accounts-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        E-Mail
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
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
              name: account.name || '',
              email: account.email || '',
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

export default AccountsForm;
