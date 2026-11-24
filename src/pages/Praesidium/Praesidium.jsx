import SelectField from '../../components/Form/SelectField/SelectField';
import UserList from '../../components/UserList/UserList';
import AsyncData from '../../components/Common/AsyncData/AsyncData';
import useSWR from 'swr';
import { getAll } from '../../api';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Praesidium.css';

const Praesidium = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: years = { years: [] },
    error: yearsError,
    isLoading: yearsAreLoading,
  } = useSWR('praesidium/years', getAll);

  const yearParam = searchParams.get('year');
  const year = yearParam ? Number(yearParam) : null;

  useEffect(() => {
    if (years?.years?.length > 0 && !year) {
      setSearchParams({ year: years.years[years.years.length - 1] }, { replace: true });
    }
  }, [years, year, setSearchParams]);

  const {
    data: praesidium = { praesidium: [] },
    error: praesidiumError,
    isLoading: praesidiumIsLoading,
  } = useSWR(year ? `praesidium/${year}` : null, getAll);

  const yearOptions = [...(years.years || [])].reverse().map((yearOption) => ({
    label: `${yearOption} - ${yearOption + 1}`,
    value: yearOption,
  }));

  return (
    <>
      <div className="container-sm-tm praesidium-sectie">
        <h1>Praesidium</h1>
        <AsyncData loading={yearsAreLoading} error={yearsError}>
          <SelectField options={yearOptions} value={year} onChange={(value) => setSearchParams({ year: value })} />
        </AsyncData>
      </div>
      <div className="container-sm-bm">
        <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
          <UserList users={praesidium.praesidium} endpoint={'praesidium/members'} />
        </AsyncData>
      </div>
    </>
  );
};

export default Praesidium;
