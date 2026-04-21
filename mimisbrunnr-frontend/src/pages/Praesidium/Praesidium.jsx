import SelectField from "../../components/Form/SelectField/SelectField";
import UserList from "../../components/UserList/UserList";
import praesidium from "../../api/praesidium";

const options = ["2024-2025", "2025-2026"];

const Praesidium = () => {
  return (
    <div className="container-sm-tm">
      <h1>Praesidium</h1>
      <SelectField label={"Kies een jaar:"} options={options} />
      <UserList users={praesidium} />
    </div>
  );
};

export default Praesidium;
