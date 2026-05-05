import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { deleteById, getAll, save } from "../../../../api";
import './MemberForm.css'
import SelectField from "../../../Form/SelectField/SelectField";
import AsyncData from "../../../Common/AsyncData/AsyncData";

const MemberForm = ({ endpoint, id = undefined, member = {} }) => {
  const navigate = useNavigate();
  const isEditMode = id !== undefined;

  const [formData, setFormData] = useState({
    memberId: '',
    imageUrl: '',
    year: undefined,
    role: undefined,
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        memberId: member.member?.id || '',
        imageUrl: member.image?.url || '',
        year: member.year || undefined,
        role: member.role?.id || undefined,
      });
    }
  }, [member]);

  const { data: memberdetails = { members: [] }, isLoading: membersLoading, error: membersError } = useSWR('praesidium/memberdetails', getAll)
  const { data: roles = { roles: [] }, isLoading: rolesLoading, error: rolesError } = useSWR('praesidium/roles', getAll)
  const { trigger: handleSave, isMutating } = useSWRMutation(endpoint, save);
  const { trigger: handleDelete, isMutating: isDeleting } = useSWRMutation(endpoint, deleteById);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
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
    if (!window.confirm("Are you sure you want to delete this entry?")) return;

    await handleDelete(id);
    navigate(-1);
  }

  async function handleSelect(e) {
    setFormData({
      ...formData,
      ...e
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="member-form">
      <label>
        Heimie
        <AsyncData loading={membersLoading} error={membersError}>
          <SelectField
            label={"Kies een lid:"}
            options={memberdetails.members.map(r => ({ label: `${r.firstName} ${r.lastName}`, value: r.id }))}
            value={formData.memberId}
            onChange={e => handleSelect({ memberId: e })}
          />
        </AsyncData>
      </label>

      <label>
        Afbeelding
        <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      </label>

      {formData.imageUrl && (
        <img src={formData.imageUrl} alt="preview" style={{ width: 100 }} />
      )}

      {endpoint !== "praesidium/erelids" &&
        <label>
          Jaar
          <input type="number" name="year" value={formData.year} onChange={handleChange}></input>
        </label>
      }

      {endpoint === "praesidium/members" &&
        <label>
          Role
          <AsyncData loading={rolesLoading} error={rolesError}>
            <SelectField
              label={"Kies een lid:"}
              options={roles.roles.map(r => ({ label: r.name, value: r.id }))}
              value={formData.role}
              onChange={e => handleSelect({ role: e })}
            />
          </AsyncData>
        </label>
      }

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
          memberId: member.member?.id ?? '',
          imageUrl: member.image?.url ?? '',
          year: member.year ?? undefined,
          role: member.role?.id ?? undefined,
        })}>
          Reset
        </button>

        <button type="submit" disabled={isMutating}>
          {isMutating ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default MemberForm;