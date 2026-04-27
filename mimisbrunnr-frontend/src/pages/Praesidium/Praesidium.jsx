import SelectField from "../../components/Form/SelectField/SelectField";
import UserList from "../../components/UserList/UserList";
import AsyncData from "../../components/Common/AsyncData/AsyncData";
import praesidium from "../../api/praesidium";
import useSWR from "swr";
import { getAll } from "../../api"
import { useState } from "react";

const options = ["2024-2025", "2025-2026"];

const Praesidium = () => {
  const { data: years = { years: [] }, yearsError, yearsAreLoading } = useSWR(`praesidium/years`, getAll);
  const [year, setYear] = useState(2024);
  const { data: praesidium = { praesidium: [] }, praesidiumError, praesidiumIsLoading } = useSWR(`praesidium/${year}`, getAll);

  console.log(years)
  console.log(praesidium)

  return (
    <div className="container-sm-tm">
      <h1>Praesidium</h1>
      <AsyncData loading={yearsAreLoading} error={yearsError}>
        <SelectField label={"Kies een jaar:"} options={years.years} value={year} onChange={setYear} />
      </AsyncData>
      <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
        <UserList users={praesidium.praesidium} />
      </AsyncData>
    </div>
  );
};

export default Praesidium;
