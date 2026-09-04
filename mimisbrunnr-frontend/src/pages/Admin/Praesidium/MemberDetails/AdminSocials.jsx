import { useParams } from 'react-router';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { getAll, post } from '../../../../api';
import SocialsTable from '../../../../components/Admin/Praesidium/Socials/SocialsTable';
import { useState } from 'react';
import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SelectField from '../../../../components/Form/SelectField/SelectField';

const AdminSocials = () => {
  const { id } = useParams();
  const { data = { socials: [] }, error, isLoading, mutate } = useSWR(`praesidium/memberdetails/${id}`, getAll);
  const { data: types = { types: [] }, typesError, typesAreLoading } = useSWR('socials/types', getAll);
  const { trigger: handleAdd, isMutating: isAdding } = useSWRMutation(`members/${id}/socials`, post);

  const [showAdd, setShowAdd] = useState(false);
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');

  async function onAdd() {
    await handleAdd({ url, typeId: type });

    await mutate();

    setShowAdd(false);
    setUrl('');
  }

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs
          children={[
            { link: 'admin' },
            { link: 'ledengegevens' },
            { link: `${data.firstName} ${data.lastName} > Socials`, isLast: true },
          ]}
        />
        <h1>{data.name}</h1>
        <SocialsTable memberId={id} socials={data.socials} mutate={mutate} />
      </AsyncData>

      <div>
        <button onClick={() => setShowAdd(!showAdd)}>Voeg Social toe</button>
      </div>

      {showAdd && (
        <div className="add-inline">
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
          <AsyncData loading={typesAreLoading} error={typesError}>
            <SelectField
              label={'Kies een type:'}
              options={types.types.map((t) => ({ label: t.name, value: t.id }))}
              value={type}
              onChange={setType}
            />
          </AsyncData>
          <button disabled={isAdding} onClick={() => onAdd()}>
            Toevoegen
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminSocials;
