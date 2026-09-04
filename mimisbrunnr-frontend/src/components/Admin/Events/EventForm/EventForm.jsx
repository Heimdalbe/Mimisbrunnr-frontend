import { Form, useNavigate } from 'react-router';
import './EventForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';

const ACCESSIBILITY_OPTIONS = ['OPEN', 'CLOSED'];

const CATEGORY_OPTIONS = ['SPORT', 'CULTUUR', 'SCHACHTEN', 'FEESTENLAN', 'LEAGUE', 'OTHERS'];

const EventForm = ({ id = undefined, event = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    category: CATEGORY_OPTIONS[0],
    accessibility: ACCESSIBILITY_OPTIONS[0],
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
        accessibility: event.accessibility || ACCESSIBILITY_OPTIONS[0],
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

    await handleSave({
      id: id,
      ...formData,
    });

    navigate('/admin/events');
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    await handleDelete(id);
    navigate('/admin/events');
  }

  return (
    <Form onSubmit={handleSubmit} className="event-form">
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
        Accessibiliteit
        <select name="accessibility" value={formData.accessibility} onChange={handleChange} required>
          {ACCESSIBILITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

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

      <label>
        Banner
        <input type="url" name="bannerurl" value={formData.bannerurl} onChange={handleChange} required />
      </label>

      {formData.bannerurl && <img src={formData.bannerurl} alt="preview" style={{ width: 100 }} />}

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
        <input type="url" name="url" value={formData.url} onChange={handleChange} required />
      </label>

      {isEditMode && (
        <label>
          Gedeeld
          <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
        </label>
      )}

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
              name: event.name || '',
              category: event.category || CATEGORY_OPTIONS[0],
              accessibility: event.accessibility || ACCESSIBILITY_OPTIONS[0],
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
