import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import useSWR from 'swr';
import { getAll } from '../../api';

const Account = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { data = {}, error, isLoading } = useSWR('identity/accounts/info', getAll);
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
          <button type="button" onClick={handleLogout}>
            Uitloggen
          </button>
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
