import { Form, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';
import ImageUpload from '../../../../components/ImageUpload';

import { eventAllowedRoles } from '../../../../constants/eventAudiences';
import EventAudienceFields from './EventAudienceFields';

const CATEGORY_OPTIONS = ['SPORT', 'CULTUUR', 'SCHACHTEN', 'FEESTENLAN', 'LEAGUE', 'OTHERS'];

const EventForm = ({ id = undefined, event = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    category: CATEGORY_OPTIONS[0],
    accessibility: 'OPEN',
    allowedRoles: [],
    location: '',
    start: '',
    end: '',
    bannerurl: '',
    description: '',
    entryFee: '',
    iCal: '',
    url: '',
    sponsorIds: [],
    published: false,
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: event.name || '',
        category: event.category || CATEGORY_OPTIONS[0],
        accessibility: eventAllowedRoles(event).length ? 'CLOSED' : 'OPEN',
        allowedRoles: eventAllowedRoles(event),
        location: event.location || '',
        start: event.start || '',
        end: event.end || '',
        bannerurl: event.banner?.url || '',
        description: event.description || '',
        entryFee: event.entryFee ?? '',
        iCal: event.iCal ?? '',
        url: event.url || '',
        sponsorIds: event.sponsors?.map((s) => s.id) || [],
        published: event.published || false,
      });
    }
  }, [event, isEditMode]);

  const [error, setError] = useState('');

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

    setError('');
    if (formData.accessibility !== 'OPEN' && formData.allowedRoles.length === 0) {
      setError('Selecteer minstens één toegelaten rol, of kies Iedereen welkom.');
      return;
    }

    if (!formData.bannerurl) {
      alert('Upload eerst een banner');
      return;
    }

    try {
      await handleSave({
        id: id,
        ...formData,
        allowedRoles: formData.accessibility === 'OPEN' ? [] : formData.allowedRoles,
        url: formData.url || 'https://heimdal.be',
      });
      navigate('/admin/events');
    } catch (failure) {
      const messages = failure.response?.data?.validationErrors?.map((item) => item.errorMessage);
      setError(messages?.join(' ') || 'Evenement opslaan mislukt. Probeer het opnieuw.');
    }
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    await handleDelete(id);
    navigate('/admin/events');
  }

  return (
    <Form onSubmit={handleSubmit} className="admin-form admin-event-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Categorie
        <select name="category" value={formData.category} onChange={handleChange} required>
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Doelgroep
        <select name="accessibility" value={formData.accessibility} onChange={handleChange} required>
          <option value="OPEN">Iedereen welkom</option>
          <option value="CLOSED">Geselecteerde rollen</option>
        </select>
      </label>
      {formData.accessibility !== 'OPEN' && (
        <EventAudienceFields
          selected={formData.allowedRoles}
          onChange={(allowedRoles) => setFormData((previous) => ({ ...previous, allowedRoles }))}
          disabled={isMutating}
        />
      )}
      {error && <p className="error-message" role="alert">{error}</p>}

      <label>
        Locatie
        <input name="location" value={formData.location} onChange={handleChange} required />
      </label>

      <label>
        Start
        <input type="datetime-local" name="start" value={formData.start} onChange={handleChange} required />
      </label>

      <label>
        End
        <input type="datetime-local" name="end" value={formData.end} onChange={handleChange} required />
      </label>

      <div>
        Banner
        <ImageUpload
          value={formData.bannerurl}
          onChange={(url) => setFormData((prev) => ({ ...prev, bannerurl: url }))}
          folder="events"
        />
      </div>

      <label>
        Beschrijving
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>

      <label>
        Entry Fee
        <input name="entryFee" value={formData.entryFee} onChange={handleChange} />
      </label>

      <label>
        iCal Link
        <input type="url" name="iCal" value={formData.iCal} onChange={handleChange} />
      </label>

      <label>
        Inschrijvingslink
        <input type="url" name="url" value={formData.url} onChange={handleChange} />
      </label>

      {isEditMode && (
        <label>
          Gedeeld
          <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
        </label>
      )}

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
              name: event.name || '',
              category: event.category || CATEGORY_OPTIONS[0],
              accessibility: eventAllowedRoles(event).length ? 'CLOSED' : 'OPEN',
              allowedRoles: eventAllowedRoles(event),
              location: event.location || '',
              start: event.start || '',
              end: event.end || '',
              bannerurl: event.banner?.url || '',
              description: event.description || '',
              entryFee: event.entryFee ?? '',
              iCal: event.iCal ?? '',
              url: event.url || '',
              sponsorIds: event.sponsors?.map((s) => s.id) || [],
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
