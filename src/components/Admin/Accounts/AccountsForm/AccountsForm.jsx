import { Form, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';
import AccountNameFields from '../../../Account/AccountNameFields';
import errorMessage from '../../../../api/errorMessage';

const AccountsForm = ({ id = undefined, account = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: account.name || '',
        firstName: account.firstName || '',
        lastName: account.lastName || '',
        email: account.email || '',
      });
    }
  }, [account, isEditMode]);

  const { trigger: handleSave, isMutating } = useSWRMutation('accounts', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('accounts', deleteById);
  const [error, setError] = useState('');

  function handleChange(s) {
    const { name, value, type, checked } = s.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(s) {
    s.preventDefault();

    try {
      await handleSave({ id, ...formData });
      navigate('/admin/accounts');
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this account?')) return;

    await handleDelete(id);
    navigate('/admin/accounts');
  }

  return (
    <Form onSubmit={handleSubmit} className="admin-form admin-account-form">
      <label>
        Gebruikersnaam
        <input
          name="name"
          autoComplete="username"
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <AccountNameFields {...formData} onChange={handleChange} />

      <label>
        E-Mail
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <div>
        {isEditMode && (
          <button type="button" className="admin-button-delete" onClick={onDelete} disabled={isDeleting}>
            Delete
          </button>
        )}

        <button
          type="reset"
          onClick={() =>
            setFormData({
              name: account.name || '',
              firstName: account.firstName || '',
              lastName: account.lastName || '',
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
      {error && <p className="error-message" role="alert">{error}</p>}
    </Form>
  );
};

export default AccountsForm;
