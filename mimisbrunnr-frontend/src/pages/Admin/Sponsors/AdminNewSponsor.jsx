import SponsorForm from '../../../components/Admin/Sponsors/SponsorForm/SponsorForm';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const AdminNewSponsor = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'sponsors' }, { link: 'new', isLast: true }]} />

      <h1>Sponsor Toevoegen</h1>
      <SponsorForm action={'post'} />
    </div>
  );
};

export default AdminNewSponsor;
