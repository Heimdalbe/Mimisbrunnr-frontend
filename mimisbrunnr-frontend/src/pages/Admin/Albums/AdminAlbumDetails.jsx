import AlbumForm from "../../../components/Admin/Albums/AlbumsForm/AlbumForm";

const AdminAlbumDetails = () => {
  const { id } = useParams();
  return (
    <AlbumForm action={"put"} />
  )
}

export default AdminAlbumDetails;