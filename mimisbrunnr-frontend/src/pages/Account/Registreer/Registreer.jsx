import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Registreer.css';

const Registreer = () => {
  const { isAuthenticated, login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination from location state, or default to home
  const from = location.state?.from?.pathname || '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isPasswordValid = (pw) => {
    const minLength = pw.length >= 6;
    const hasUpperCase = /[A-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(pw);
    return minLength && hasUpperCase && hasNumber && hasSpecialChar;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Wachtwoorden komen niet overeen.');
      return;
    }

    if (!isPasswordValid(password)) {
      setError('Wachtwoord moet minstens 6 tekens bevatten, 1 hoofdletter, 1 cijfer en 1 speciaal teken.');
      return;
    }

    setError('');

    try {
      await register(name, email, password, confirmPassword);
    } catch (err) {
      if (err.response?.status === 422) {
        setError('Een account met deze naam of e-mail bestaat al.');
      } else {
        setError('Er ging iets mis. Probeer het later opnieuw.');
      }
      return;
    }

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
        <h1>Registreer</h1>
        <form onSubmit={handleSubmit} className="registreer-form">
          <label>
            Name
            <input
              name="name"
              placeholder="JohnHeimdal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            E-Mail
            <input
              type="email"
              placeholder="john.heimdal@heimdal.be"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Wachtwoord
            <input
              type="password"
              name="password"
              placeholder="wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label>
            Herhaal Wachtwoord
            <input
              type="password"
              name="confirmPassword"
              placeholder="herhaal wachtwoord"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className="registreer-form__error">{error}</p>}

          <button type="submit">Registreer</button>
          <p>
            Heb je al een account? <Link to={'/login'}>Log In</Link>
          </p>
        </form>
      </div>
    );
  }

  navigate('/account');
  return null;
};

export default Registreer;
