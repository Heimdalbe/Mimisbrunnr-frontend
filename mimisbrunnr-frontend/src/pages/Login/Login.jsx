import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login, isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination from location state, or default to home
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Ongeldig e-mailadres of wachtwoord.");
      } else {
        setError("Er ging iets mis. Probeer het later opnieuw.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      setError("Uitloggen mislukt. Probeer het opnieuw.");
    }
  };

  if (isAuthenticated) {
    return (
      <div className="container-sm-tm">
        <h1>Account</h1>
        <div>
          <p>
            Je bent ingelogd als <strong>{user?.email}</strong>
          </p>
          <button
            type="button"
            onClick={handleLogout}
          >
            Uitloggen
          </button>
        </div>
      </div>
    );
  }

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
            placeholder="john.heimdal@placeholder.be"
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
        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
