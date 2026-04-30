import { useParams } from "react-router";
import useSWR from "swr";
import { getAll, post, put } from "../../../api";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import ImageTable from "../../../components/Admin/Images/ImageTable"
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";

const AdminAlbumImages = () => {
  const { id } = useParams();
  const { data = { images: [] }, error, isLoading, mutate } = useSWR(`albums/${id}`, getAll);
  const { trigger: handleAdd, isMutating: isAdding } = useSWRMutation(`albums/${id}`, post);
  const { trigger: handleImport, isMutating: isImporting } = useSWRMutation(`albums/${id}/images`, put);

  const [showAdd, setShowAdd] = useState(false);
  const [url, setUrl] = useState('');

  const [showImport, setShowImport] = useState(false);
  const [imgurUrl, setImgurUrl] = useState('');

  useEffect(() => {
    if (showImport) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showImport]);


  async function onAdd() {
    await handleAdd({ url, description: '' });

    await mutate();

    setShowAdd(false);
    setUrl('');
  }

  async function onImport() {
    if (!window.confirm("Are you sure you want import this album (all data will be lost)?")) return;

    await handleImport({ albumUrl: imgurUrl })

    await mutate();

    setImgurUrl('');
    setShowImport(false);
  }

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs children={[{ link: 'admin' }, { link: 'albums' }, { link: `${data.name}>Images`, isLast: true }]} />
        <h1>{data.name}</h1>
        <ImageTable albumId={id} images={data.images} mutate={mutate} />
      </AsyncData>

      <div>
        <button onClick={() => setShowAdd(!showAdd)}>
          Voeg Afbeelding toe
        </button>
        <button onClick={() => setShowImport(true)}>
          Importeer Imgur Album
        </button>
      </div>

      {showAdd && (
        <div className="add-inline">
          <input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Image URL"
          />
          <button disabled={isAdding} onClick={e => onAdd()}>Toevoegen</button>
        </div>
      )}

      {showImport && (
        <div className="overlay" onClick={() => setShowImport(false)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <div>
              <h2>Import Imgur Album</h2>

              <input
                placeholder="Imgur album URL"
                value={imgurUrl}
                onChange={e => setImgurUrl(e.target.value)}
              />

              <button disabled={isImporting} onClick={e => onImport()}>
                Importeren
              </button>

              <button onClick={() => setShowImport(false)}>
                Annuleren
              </button>
            </div>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default AdminAlbumImages;