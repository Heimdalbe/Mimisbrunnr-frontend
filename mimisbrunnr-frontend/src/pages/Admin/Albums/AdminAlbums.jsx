import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import AlbumTable from '../../../components/Admin/Albums/AlbumTable/AlbumTable';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router';

const AdminAlbums = () => {
  const { data = {}, error, isLoading } = useSWR('albums', getAll);

  return (
    <div className="admin-page">
      <Breadcrumbs children={[{ link: 'admin' }, { link: 'albums', isLast: true }]} />
      <Link className="admin-add-button" to={'/admin/albums/new'}>Toevoegen</Link>
      <AsyncData loading={isLoading} error={error}>
        <div className="admin-table-scroll" role="region" aria-label="Overzicht" tabIndex={0}>
          <AlbumTable albums={data.albums} />
        </div>
      </AsyncData>
    </div>
  );
};

export default AdminAlbums;