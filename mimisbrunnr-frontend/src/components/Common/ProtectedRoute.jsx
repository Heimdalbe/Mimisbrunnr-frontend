import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

// Accepts either a single `role` string or a `roles` array.
// Users with the Hmdl role always pass, regardless of what's required.
const ProtectedRoute = ({ children, role, roles }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="container-sm-tm">Laden...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRoles = user?.roles ?? [];
  const requiredRoles = roles ?? (role ? [role] : []);

  const hasAccess =
    userRoles.includes('Hmdl') || requiredRoles.length === 0 || requiredRoles.some((r) => userRoles.includes(r));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
