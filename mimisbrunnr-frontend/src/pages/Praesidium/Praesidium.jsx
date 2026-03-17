import SelectField from "../../components/Form/SelectField/SelectField";
import UserList from "../../components/UserList/UserList";
import praesidium from "../../api/praesidium";

const options = ["geel", "groen"];

const Praesidium = () => {
  return (
    <div className="container-sm-tm">
      <h1>Praesidium</h1>
      <SelectField options={options} />
      <UserList users={praesidium} />
    </div>
  );
};

export default Praesidium;
