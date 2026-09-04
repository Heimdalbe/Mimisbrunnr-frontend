import { Form, useNavigate } from 'react-router';
import './SponsorForm.css';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';

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
    sponsorRank: SPONSOR_RANK_OPTIONS[0],
    lanSponsorRank: LAN_SPONSOR_RANK_OPTIONS[0],
    order: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: sponsor.name || '',
        logourl: sponsor.logo?.url || '',
        website: sponsor.website || '',
        benefits: sponsor.benefits || '',
        sponsorRank: sponsor.rank || SPONSOR_RANK_OPTIONS[0],
        lanSponsorRank: sponsor.lanSponsorRank || LAN_SPONSOR_RANK_OPTIONS[0],
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
    <Form onSubmit={handleSubmit} className="sponsor-form">
      <label>
        Naam
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Logo
        <input type="url" name="logourl" value={formData.logourl} onChange={handleChange} required />
      </label>

      {formData.logourl && <img src={formData.logourl} alt="preview" style={{ width: 100 }} />}

      <label>
        Website
        <input type="url" name="website" value={formData.website} onChange={handleChange} required />
      </label>

      <label>
        Benefits
        <textarea name="benefits" value={formData.benefits} onChange={handleChange} />
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
        Order
        <input type="number" name="order" value={formData.order} onChange={handleChange} required />
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
              name: sponsor.name || '',
              logourl: sponsor.logo?.url || '',
              website: sponsor.website || '',
              benefits: sponsor.benefits || '',
              sponsorRank: sponsor.rank || SPONSOR_RANK_OPTIONS[0],
              lanSponsorRank: sponsor.lanSponsorRank || LAN_SPONSOR_RANK_OPTIONS[0],
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
