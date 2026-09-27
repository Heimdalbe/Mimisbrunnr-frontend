import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import UserList from '../../../components/UserList/UserList';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import '../Praesidium.css';

const Superschachten = () => {
  const {
    data: praesidium = { schachts: [] },
    praesidiumError,
    praesidiumIsLoading,
  } = useSWR('praesidium/superschachts', getAll);

  return (
    <>
      <div className="container-sm-tm">
        <div className="praesidium-breadcrumb">
          <Breadcrumbs showHome={false} children={[{ link: 'praesidium' }, { link: 'superschachten', isLast: true }]} />
        </div>
        <div className="praesidium-sectie">
          <h1 style={{marginBottom: '70px'}}>Superschachten</h1>
        </div>
      </div>
      <div className="container-sm-bm">
        <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
          <UserList users={praesidium.schachts} endpoint={'praesidium/superschachts'} />
        </AsyncData>
      </div>
    </>
  );
};

export default Superschachten;
