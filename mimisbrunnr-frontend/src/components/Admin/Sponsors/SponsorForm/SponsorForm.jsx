import { Form, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';
import ImageUpload from '../../../../components/ImageUpload';

const SPONSOR_RANK_OPTIONS = ['None', 'Bronze', 'Silver', 'Gold', 'Diamond'];

const LAN_SPONSOR_RANK_OPTIONS = ['None', 'KiloByte', 'MegaByte', 'GigaByte', 'TeraByte'];

const SponsorForm = ({ id = undefined, sponsor = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    name: '',
    logourl: '',
    website: '',
    benefits: '',
    description: '',
    sponsorRank: SPONSOR_RANK_OPTIONS[0],
    lanSponsorRank: LAN_SPONSOR_RANK_OPTIONS[0],
    onHomePage: false,
    onSponsorPage: false,
    order: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: sponsor.name || '',
        logourl: sponsor.logo?.url || '',
        website: sponsor.website || '',
        benefits: sponsor.benefits || '',
        description: sponsor.description || '',
        sponsorRank: sponsor.rank || SPONSOR_RANK_OPTIONS[0],
        lanSponsorRank: sponsor.lanSponsorRank || LAN_SPONSOR_RANK_OPTIONS[0],
        onHomePage: sponsor.onHomePage || false,
        onSponsorPage: sponsor.onSponsorPage || false,
        order: sponsor.order ?? '',
      });
    }
  }, [sponsor, isEditMode]);

  const { trigger: handleSave, isMutating } = useSWRMutation('sponsors', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('sponsors', deleteById);

  function handleChange(s) {
    const { name, value, type, checked } = s.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(s) {
    s.preventDefault();

    if (!formData.logourl) {
      alert('Upload eerst een logo');
      return;
    }

    await handleSave({
      id: id,
      ...formData,
    });

    navigate('/admin/sponsors');
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this sponsor?')) return;

    await handleDelete(id);
    navigate('/admin/sponsors');
  }

  return (
    <Form onSubmit={handleSubmit} className="admin-form admin-sponsor-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <div>
        Logo
        <ImageUpload
          value={formData.logourl}
          onChange={(url) => setFormData((prev) => ({ ...prev, logourl: url }))}
          folder="sponsors"
        />
      </div>

      <label>
        Website
        <input type="url" name="website" value={formData.website} onChange={handleChange} required />
      </label>

      <label>
        Benefits
        <textarea name="benefits" value={formData.benefits} onChange={handleChange} />
      </label>

      <label>
        Description
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>

      <label>
        Sponsor Rank
        <select name="sponsorRank" value={formData.sponsorRank} onChange={handleChange} required>
          {SPONSOR_RANK_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        LAN Sponsor Rank
        <select name="lanSponsorRank" value={formData.lanSponsorRank} onChange={handleChange} required>
          {LAN_SPONSOR_RANK_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Op Home Pagina
        <input type="checkbox" name="onHomePage" checked={formData.onHomePage} onChange={handleChange} />
      </label>

      <label>
        Op Sponsor Pagina
        <input type="checkbox" name="onSponsorPage" checked={formData.onSponsorPage} onChange={handleChange} />
      </label>

      <label>
        Order
        <input type="number" name="order" value={formData.order} onChange={handleChange} required />
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
              name: sponsor.name || '',
              logourl: sponsor.logo?.url || '',
              website: sponsor.website || '',
              benefits: sponsor.benefits || '',
              description: sponsor.description || '',
              sponsorRank: sponsor.rank || SPONSOR_RANK_OPTIONS[0],
              lanSponsorRank: sponsor.lanSponsorRank || LAN_SPONSOR_RANK_OPTIONS[0],
              onHomePage: sponsor.onHomePage || false,
              onSponsorPage: sponsor.onSponsorPage || false,
              order: sponsor.order ?? '',
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

export default SponsorForm;
