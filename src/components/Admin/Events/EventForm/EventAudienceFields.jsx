import { EVENT_ROLES } from '../../../../constants/eventAudiences';
import './EventAudienceFields.css';

const EventAudienceFields = ({ selected, onChange, disabled }) => {
  function toggle(role) {
    onChange(selected.includes(role) ? selected.filter((value) => value !== role) : [...selected, role]);
  }

  return (
    <fieldset className="event-audience-fields" disabled={disabled}>
      <legend>Toegelaten rollen</legend>
      <p>
        Kies minstens één rol. Een account moet één van de geselecteerde rollen hebben.
        Voor Schacht of Commilitones is daarnaast altijd de Heimie-rol nodig.
      </p>
      {Object.entries(EVENT_ROLES).map(([role, description]) => (
        <label key={role} className="event-audience-fields__option">
          <input type="checkbox" checked={selected.includes(role)} onChange={() => toggle(role)} />
          <span><strong>{role}</strong><small>{description}</small></span>
        </label>
      ))}
    </fieldset>
  );
};

export default EventAudienceFields;
