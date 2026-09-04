import useSWR from 'swr';
import { getAll } from '../../../api';
import { useParams } from 'react-router';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import SocialTypesForm from '../../../components/Admin/SocialTypes/SocialTypesForm/SocialTypesForm';

const AdminEditSocialType = () => {
  const { id } = useParams();
  const { data: socialtype = {}, error, isLoading } = useSWR(`socials/types/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs
          children={[{ link: 'admin' }, { link: 'socialtypes' }, { link: `${socialtype.name}`, isLast: true }]}
        />

        <h1>Social Type Wijzigen</h1>
        <SocialTypesForm id={id} action={'put'} socialtype={socialtype} />
      </AsyncData>
    </div>
  );
};

export default AdminEditSocialType;
