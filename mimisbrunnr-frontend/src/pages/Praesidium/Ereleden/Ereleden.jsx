import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import UserList from '../../../components/UserList/UserList';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import '../Praesidium.css';

const Ereleden = () => {
  const {
    data: praesidium = { erelids: [] },
    praesidiumError,
    praesidiumIsLoading,
  } = useSWR('praesidium/erelids', getAll);

  return (
    <>
      <div className="container-sm-tm">
        <div className="praesidium-breadcrumb">
          <Breadcrumbs showHome={false} children={[{ link: 'praesidium' }, { link: 'ereleden', isLast: true }]} />
        </div>
        <div className="praesidium-sectie">
          <h1 style={{marginBottom: '70px'}}>Ereleden</h1>
        </div>
      </div>
      <div className="container-sm-bm">
        <AsyncData loading={praesidiumIsLoading} error={praesidiumError}>
          <UserList users={praesidium.erelids} endpoint={'praesidium/erelids'} />
        </AsyncData>
      </div>
    </>
  );
};

export default Ereleden;
