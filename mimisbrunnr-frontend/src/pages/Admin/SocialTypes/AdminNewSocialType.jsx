import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import SocialTypesForm from '../../../components/Admin/SocialTypes/SocialTypesForm/SocialTypesForm';

const AdminNewSocialType = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'socialtypes' }, { link: 'new', isLast: true }]} />

      <h1>Social Type Toevoegen</h1>
      <SocialTypesForm action={'post'} />
    </div>
  );
};

export default AdminNewSocialType;
