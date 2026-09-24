import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import UserList from '../../../components/UserList/UserList';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { useEffect, useState } from 'react';
import SelectField from '../../../components/Form/SelectField/SelectField';
import '../Praesidium.css';

const LustrumCommites = () => {
  const { data: years = { years: [] }, error: yearsError, isLoading: yearsAreLoading } = useSWR(
    'praesidium/lustrum/years', getAll);

  const [year, setYear] = useState(null);

  useEffect(() => {
    if (years?.years?.length > 0 && !year) {
      setYear(years.years[years.years.length - 1]);
    }
  }, [years, year]);

  const { data: praesidium = { lustrumLids: [] }, error: praesidiumError, isLoading: praesidiumIsLoading } = useSWR(
    year ? `praesidium/lustrum/${year}` : null,
    getAll,
  );

  const yearOptions = [...years.years]
    .reverse()
    .map((yearOption) => ({
      label: `${yearOption} - ${yearOption + 1}`,
      value: yearOption,
    }));

  return (
    <>
      <div className="container-sm-tm">
        <div className="praesidium-breadcrumb">
          <Breadcrumbs showHome={false} children={[{ link: 'praesidium' }, { link: 'lustrumcommites', isLast: true }]} />
        </div>
        <div className="praesidium-sectie">
          <h1>Lustrumcommité</h1>
          <AsyncData loading={yearsAreLoading} error={yearsError}>
            <SelectField options={yearOptions} value={year} onChange={setYear} />
          </AsyncData>
        </div>
      </div>
      <div className="container-sm-bm">
        <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
          <UserList users={praesidium.lustrumLids} endpoint={'praesidium/lustrum/members'} />
        </AsyncData>
      </div>
    </>
  );
};

export default LustrumCommites;