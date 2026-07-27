import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getUserInfo, login as apiLogin, logout as apiLogout } from '../api/auth';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (cookie still valid) on mount
  const checkAuth = useCallback(async () => {
    try {
      const data = await getUserInfo();
      setUser(data.value ?? data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email, password) => {
    await apiLogin(email, password);
    // After successful login, fetch user info to populate state
    const data = await getUserInfo();
    setUser(data.value ?? data);
  };

  const logout = async () => {
    await apiLogout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    refreshUser: checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
