import Loader from './Loader.jsx';
import Error from './Error.jsx';

export default function AsyncData({
  loading,
  error,
  children,
}) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <>
      {children}
    </>
  );
}