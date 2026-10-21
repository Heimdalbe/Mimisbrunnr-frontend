import { useState } from 'react';
import useSWR from 'swr';
import { getAll } from '../../api';
import AlbumList from '../../components/Albums/AlbumList/AlbumList';
import Pagination from '../../components/Common/Pagination/Pagination';
import AsyncData from '../../components/Common/AsyncData/AsyncData';

const Albums = () => {
  const [page, setPage] = useState(1);
  const take = 12;
  const skip = take * (page - 1);

  const { data = [], error, isLoading } = useSWR(`albums/pub?skip=${skip}&take=${take}`, getAll);

  return (
    <AsyncData loading={isLoading} error={error}>
      <div className="container-sm-tm">
        <AlbumList albums={data.albums} />
      </div>
      <div className="container-sm-bm">
        <Pagination page={page} totalPages={Math.ceil(data.total / take)} onPageChange={setPage} />
      </div>
    </AsyncData>
  );
};

export default Albums;
