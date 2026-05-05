import AlbumForm from '../../../components/Admin/Albums/AlbumsForm/AlbumForm';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';

const AdminNewAlbum = () => {
  return (
    <div className="container">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'albums' }, { link: 'new', isLast: true }]} />

      <h1>Album Toevoegen</h1>
      <AlbumForm action={'post'} />
    </div>
  );
};

export default AdminNewAlbum;