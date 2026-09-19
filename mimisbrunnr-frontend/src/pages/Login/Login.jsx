import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination from location state, or default to home
  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Ongeldig e-mailadres of wachtwoord.');
      } else {
        setError('Er ging iets mis. Probeer het later opnieuw.');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container-sm-tm">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label>Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="john.heimdal@heimdal.be"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Wachtwoord</label>
            <input
              id="password"
              type="password"
              required
              placeholder="wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
          <p>
            Heb je nog geen account? <Link to={'/register'}>Registreer hier</Link>
          </p>
        </form>
      </div>
    );
  }
  navigate('/account');
};

export default Login;
