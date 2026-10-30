const AccountNameFields = ({ firstName = '', lastName = '', onChange }) => (
  <>
    <label>
      Voornaam
      <input name="firstName" autoComplete="given-name" maxLength={100} value={firstName} onChange={onChange} />
    </label>
    <label>
      Familienaam
      <input name="lastName" autoComplete="family-name" maxLength={100} value={lastName} onChange={onChange} />
    </label>
  </>
);

export default AccountNameFields;
