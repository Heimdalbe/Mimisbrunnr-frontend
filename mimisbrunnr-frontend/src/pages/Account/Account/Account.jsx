import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import useSWR from 'swr';
import { getAll } from '../../../api';
import AccountForm from '../../../components/Account/AccountForm/AccountForm';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import PrimaryButton from '../../../components/Common/PrimaryButton/PrimaryButton';
import './Account.css';

const Account = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { data: userData = {}, error, isLoading } = useSWR('/accounts/self', getAll);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      setError('Uitloggen mislukt. Probeer het opnieuw.');
    }
    navigate('/login');
  };

  if (isAuthenticated) {
    return (
      <div className="container-sm-tm">
        <h1>Account</h1>
        <div>
          <p>
            Je bent ingelogd als <strong>{user?.email}</strong>
          </p>
          <AsyncData loading={isLoading} error={error}>
            <AccountForm action={'put'} user={userData} />
          </AsyncData>

          <p>
            Klik <Link to={'/account/password-reset'}>hier</Link> om je wachtwoord te veranderen
          </p>

          <PrimaryButton text="Uitloggen" isLight={true} isDisabled={false} onClick={handleLogout} />
        </div>
      </div>
    );
  }

  return (
    <div className="container-sm-tm">
      <h1>Account</h1>
      <div>
        <p>
          Je bent momenteel <strong>niet</strong> ingelogd, klik hieronder om in te loggen
        </p>
        <Link to={'/login'}>Inloggen</Link>
      </div>
    </div>
  );
};

export default Account;
