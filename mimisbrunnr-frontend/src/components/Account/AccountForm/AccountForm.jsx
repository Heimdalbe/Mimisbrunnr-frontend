import { Form, useNavigate } from 'react-router';
import './AccountForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { put } from '../../../api';

const AccountForm = ({ user = {} }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
    });
  }, [user]);

  const { trigger: handleSave, isMutating } = useSWRMutation('accounts/self', put);

  function handleChange(u) {
    const { name, value, type, checked } = u.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(u) {
    u.preventDefault();

    await handleSave({
      id: user.id,
      ...formData,
    });

    navigate('/account');
  }

  const changeMade = formData.name !== user.name || formData.email !== user.email;

  return (
    <Form onSubmit={handleSubmit} className="account-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        E-Mail
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <div>
        {changeMade && (
          <button
            type="reset"
            onClick={() =>
              setFormData({
                name: user.name || '',
                email: user.email || '',
              })
            }
          >
            Reset
          </button>
        )}
        <button type="submit" disabled={isMutating}>
          {isMutating ? 'Saving...' : 'Save'}
        </button>
      </div>
    </Form>
  );
};

export default AccountForm;
