import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const AdminHome = () => (
  <div className="admin-page">
    <Breadcrumbs children={[{ link: 'admin', isLast: true }]} />
    <h1>Administratie</h1>
    <p>Kies een onderdeel in het menu om de website te beheren.</p>
  </div>
);

export default AdminHome;
