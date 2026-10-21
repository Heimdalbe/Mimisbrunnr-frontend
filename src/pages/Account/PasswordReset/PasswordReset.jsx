import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { getAll } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import PasswordResetForm from '../../../components/Account/PasswordResetForm/PasswordResetForm';

const PasswordReset = () => {
  const { isAuthenticated, user } = useAuth();
  const { data: userData = {}, error, isLoading } = useSWR('/accounts/self', getAll);

  if (isAuthenticated) {
    return (
      <div className="container-sm-tm">
        <h1>Wachtwoord veranderen</h1>
        <div>
          <p>
            Je bent ingelogd als <strong>{user?.email}</strong>
          </p>
          <AsyncData loading={isLoading} error={error}>
            <PasswordResetForm action={'put'} user={userData} />
          </AsyncData>
        </div>
      </div>
    );
  }

  return (
    <div className="container-sm-tm">
      <h1>Wachtwoord veranderen</h1>
      <div>
        <p>
          Je bent momenteel <strong>niet</strong> ingelogd, klik hieronder om in te loggen
        </p>
        <Link to={'/login'}>Inloggen</Link>
      </div>
    </div>
  );
};

export default PasswordReset;
