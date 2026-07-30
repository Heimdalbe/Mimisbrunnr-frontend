import { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router';
import useSWRMutation from 'swr/mutation';
import { deleteById, save } from '../../../../api';
import './MemberDetailsForm.css';

const MemberDetailsForm = ({ id = undefined, memberDetails = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    quote: '',
    trivia: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        firstName: memberDetails.firstName || '',
        lastName: memberDetails.lastName || '',
        quote: memberDetails.quote || '',
        trivia: memberDetails.trivia || '',
      });
    }
  }, [memberDetails, isEditMode]);

  const { trigger: handleSave, isMutating } = useSWRMutation('praesidium/memberdetails', save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation('praesidium/memberdetails', deleteById);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSave({
      id: id,
      ...formData,
    });

    navigate(-1);
  }

  async function onDelete() {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;

    await handleDelete(id);
    navigate(-1);
  }

  return (
    <Form onSubmit={handleSubmit} className="memberdetails-form">
      <label>
        Voornaam
        <input name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>

      <label>
        Achternaam
        <input name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>

      <label>
        Quote
        <input name="quote" value={formData.quote} onChange={handleChange} />
      </label>

      <label>
        Trivia
        <input name="trivia" value={formData.trivia} onChange={handleChange} />
      </label>

      <div>
        {isEditMode && (
          <button
            type="button"
            className="delete"
            onClick={onDelete}
            disabled={isDeleting}
          >
            Delete
          </button>
        )}

        <button type="reset" onClick={() => setFormData({
          firstName: memberDetails.firstName || '',
          lastName: memberDetails.lastName || '',
          quote: memberDetails.quote || '',
          trivia: memberDetails.trivia || '',
        })}>
          Reset
        </button>

        <button type="submit" disabled={isMutating}>
          {isMutating ? 'Saving...' : 'Save'}
        </button>
      </div>
    </Form>
  );
};

export default MemberDetailsForm;