import { useState } from 'react';
import { Link } from 'react-router';
import { axios } from '../../../../api';
import { useAuth } from '../../../../contexts/AuthContext';
import './AccountRolesForm.css';

const descriptions = {
  Feut: 'Toegang tot open evenementen.',
  Schacht: 'Toegang tot open en gesloten evenementen.',
  Commilitones: 'Toegang tot open en gesloten evenementen.',
  Hmdl: 'Volledige beheerderstoegang, inclusief accounts en rollen.',
  EventEditor: 'Evenementen beheren.',
  MediaEditor: 'Albums en afbeeldingen beheren.',
  SponsorEditor: 'Sponsors beheren.',
};

function errorMessage(error) {
  const body = error.response?.data;
  const validation = body?.validationErrors?.map((item) => item.errorMessage);
  const errors = Array.isArray(body?.errors) ? body.errors : Object.values(body?.errors ?? {}).flat();
  return [...(validation ?? []), ...errors].join(' ') || 'Opslaan mislukt. Probeer het opnieuw.';
}

const AccountRolesForm = ({ account, assigned, available, onSaved }) => {
  const { refreshUser } = useAuth();
  const [savedRoles, setSavedRoles] = useState(assigned.roles);
  const [selected, setSelected] = useState(assigned.roles);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const changed = selected.length !== savedRoles.length || selected.some((role) => !savedRoles.includes(role));

  function toggle(role) {
    setSaved(false);
    setError('');
    setSelected((previous) => previous.includes(role)
      ? previous.filter((name) => name !== role)
      : [...previous, role]);
  }

  function reset() {
    setSelected(savedRoles);
    setError('');
    setSaved(false);
  }

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const { data } = await axios.put(`accounts/${account.id}/roles`, { roles: selected });
      setSelected(data.value.roles);
      setSavedRoles(data.value.roles);
      await onSaved(data.value);
      if (assigned.isCurrentUser) await refreshUser();
      setSaved(true);
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="account-roles-form" onSubmit={submit}>
      <p><strong>{account.name}</strong> — {account.email}</p>
      <p>Selecteer alle rollen voor dit account. Uitgevinkte rollen worden bij het opslaan verwijderd.</p>
      <fieldset disabled={saving}>
        <legend>Rollen</legend>
        {available.length === 0 && <p>Er zijn nog geen rollen beschikbaar.</p>}
        {available.map(({ key, value: role }) => (
          <label key={key} className="account-role-option">
            <input
              type="checkbox"
              checked={selected.includes(role)}
              onChange={() => toggle(role)}
              disabled={assigned.isCurrentUser && role === 'Hmdl'}
            />
            <span>
              <strong>{role}</strong>
              {descriptions[role] && <small>{descriptions[role]}</small>}
            </span>
          </label>
        ))}
      </fieldset>
      {assigned.isCurrentUser && <p>Je kunt je eigen Hmdl-beheerdersrol niet verwijderen.</p>}
      {selected.length === 0 && <p>Dit account heeft na het opslaan geen rolgebonden toegang meer.</p>}
      <p>Nieuwe rechten gelden vanaf het volgende verzoek aan de server.</p>
      {error && <p role="alert">{error}</p>}
      {saved && <p role="status">Rollen opgeslagen.</p>}
      <div className="account-roles-actions">
        <Link to="/admin/accounts">Terug naar accounts</Link>
        <button type="button" onClick={reset} disabled={saving || !changed}>Herstellen</button>
        <button type="submit" disabled={saving || !changed || available.length === 0}>
          {saving ? 'Opslaan...' : 'Rollen opslaan'}
        </button>
      </div>
    </form>
  );
};

export default AccountRolesForm;
