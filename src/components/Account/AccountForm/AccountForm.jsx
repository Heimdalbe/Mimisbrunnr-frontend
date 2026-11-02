import { Form, useNavigate } from 'react-router';
import './AccountForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { put } from '../../../api';
import { useSWRConfig } from 'swr';
import AccountNameFields from '../AccountNameFields';
import errorMessage from '../../../api/errorMessage';

const AccountForm = ({ user = {} }) => {
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();

  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    setFormData({
      name: user.name || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
    });
  }, [user]);

  const { trigger: handleSave, isMutating } = useSWRMutation('/accounts/self', put);
  const [error, setError] = useState('');

  function handleChange(u) {
    const { name, value, type, checked } = u.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(u) {
    u.preventDefault();
    try {
      await handleSave({
        id: user.id,
        ...formData,
      });
      await mutate('/accounts/self');
      setError('');
    } catch (err) {
      setError(errorMessage(err));
      return;
    }
    navigate('/account');
  }

  const changeMade = Object.keys(formData).some((key) => formData[key] !== (user[key] ?? ''));

  return (
    <Form onSubmit={handleSubmit} className="account-form">
      <label>
        Gebruikersnaam
        <input
          name="name"
          autoComplete="username"
          maxLength={50}
          placeholder="JohnHeimdal"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <AccountNameFields {...formData} onChange={handleChange} />

      <label>
        E-Mail
        <input
          type="email"
          placeholder="john.heimdal@heimdal.be"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <div>
        {changeMade && (
          <button
            type="reset"
            onClick={() =>
              setFormData({
                name: user.name || '',
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
              })
            }
          >
            Reset
          </button>
        )}
        {changeMade && (
          <button type="submit" disabled={isMutating}>
            {isMutating ? 'Saving...' : 'Save'}
          </button>
        )}
      </div>
      {error && <p className="error-message" role="alert">{error}</p>}
    </Form>
  );
};

export default AccountForm;
