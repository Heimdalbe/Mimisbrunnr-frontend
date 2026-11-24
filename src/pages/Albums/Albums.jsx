import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import { getAll } from '../../api';
import AlbumList from '../../components/Albums/AlbumList/AlbumList';
import Pagination from '../../components/Common/Pagination/Pagination';
import AsyncData from '../../components/Common/AsyncData/AsyncData';

const Albums = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const take = 12;
  const requestedPage = Number(searchParams.get('page'));
  const maxPage = Math.floor(2147483647 / take) + 1;
  const page = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= maxPage ? requestedPage : 1;
  const skip = take * (page - 1);

  const { data = [], error, isLoading } = useSWR(`albums/pub?skip=${skip}&take=${take}`, getAll);

  return (
    <AsyncData loading={isLoading} error={error}>
      <div className="container-sm-tm">
        <AlbumList albums={data.albums} />
      </div>
      <div className="container-sm-bm">
        <Pagination page={page} totalPages={Math.ceil(data.total / take)}
          onPageChange={(nextPage) => setSearchParams(nextPage === 1 ? {} : { page: nextPage })} />
      </div>
    </AsyncData>
  );
};

export default Albums;
