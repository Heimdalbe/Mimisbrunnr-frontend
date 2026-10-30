import { useState } from 'react';
import useSWR from 'swr';
import { axios, getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import './AdminMembershipFees.css';

const MembershipFeesForm = ({ fees, onSaved }) => {
  const [firstYearFee, setFirstYearFee] = useState(String(fees.firstYearFee));
  const [renewalFee, setRenewalFee] = useState(String(fees.renewalFee));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const { data } = await axios.put('membership-fees', {
        firstYearFee: Number(firstYearFee),
        renewalFee: Number(renewalFee),
      });
      await onSaved(data.value, false);
      setFirstYearFee(String(data.value.firstYearFee));
      setRenewalFee(String(data.value.renewalFee));
      setSaved(true);
    } catch {
      setError('Opslaan mislukt. Controleer de bedragen en probeer opnieuw.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="admin-form admin-membership-fees" onSubmit={submit} onChange={() => setSaved(false)}>
      <fieldset disabled={saving}>
        <legend>Lidgeld in euro</legend>
        <label>
          Eerste lidjaar
          <input
            type="number" min="0" max="9999.99" step="0.01" required
            value={firstYearFee} onChange={(event) => setFirstYearFee(event.target.value)}
          />
        </label>
        <label>
          Volgende jaren (per jaar)
          <input
            type="number" min="0" max="9999.99" step="0.01" required
            value={renewalFee} onChange={(event) => setRenewalFee(event.target.value)}
          />
        </label>
      </fieldset>
      {error && <p role="alert">{error}</p>}
      {saved && <p role="status">Lidgeld opgeslagen. De homepage toont de nieuwe bedragen.</p>}
      <button type="submit" disabled={saving}>{saving ? 'Opslaan…' : 'Opslaan'}</button>
    </form>
  );
};

const AdminMembershipFees = () => {
  const { data: fees, error, isLoading, mutate } = useSWR('membership-fees', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'lidgeld', isLast: true }]} />
      <h1>Lidgeld</h1>
      <p>Pas de jaarlijkse bedragen aan die bij “Hoe word je lid?” op de homepage staan.</p>
      <AsyncData loading={isLoading} error={error}>
        {fees && <MembershipFeesForm fees={fees} onSaved={mutate} />}
      </AsyncData>
    </div>
  );
};

export default AdminMembershipFees;
