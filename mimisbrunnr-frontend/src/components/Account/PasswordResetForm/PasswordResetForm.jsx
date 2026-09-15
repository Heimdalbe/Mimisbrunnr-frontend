import { Form, useNavigate } from 'react-router';
import './PasswordResetForm.css';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { put } from '../../../api';

const PasswordResetForm = ({ user = {} }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: '',
    newPasswordRepeat: '',
  });
  const [error, setError] = useState('');

  const { trigger: handleSave, isMutating } = useSWRMutation('accounts/self', put);

  const isPasswordValid = (pw) => {
    const minLength = pw.length >= 6;
    const hasUpperCase = /[A-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(pw);
    return minLength && hasUpperCase && hasNumber && hasSpecialChar;
  };

  function handleChange(u) {
    const { name, value, type, checked } = u.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (error) {
      setError('');
    }
  }

  async function handleSubmit(u) {
    u.preventDefault();

    if (formData.newPassword !== formData.newPasswordRepeat) {
      setError('Wachtwoorden komen niet overeen.');
      return;
    }

    if (!isPasswordValid(formData.newPassword)) {
      setError('Wachtwoord moet minstens 6 tekens bevatten, 1 hoofdletter, 1 cijfer en 1 speciaal teken.');
      return;
    }

    setError('');
    await handleSave({
      id: user.id,
      password: formData.newPassword,
    });

    navigate('/account');
  }

  return (
    <Form onSubmit={handleSubmit} className="password-reset-form">
      <label>
        Nieuw Wachtwoord
        <input
          type="password"
          placeholder="nieuw wachtwoord"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Herhaal Nieuw Wachtwoord
        <input
          type="password"
          name="newPasswordRepeat"
          placeholder="herhaal nieuw wachtwoord"
          value={formData.newPasswordRepeat}
          onChange={handleChange}
          required
        />
      </label>

      {error && <p className="password-reset-form__error">{error}</p>}

      <div>
        <button type="submit" disabled={isMutating}>
          {isMutating ? 'Saving...' : 'Save'}
        </button>
      </div>
    </Form>
  );
};

export default PasswordResetForm;
