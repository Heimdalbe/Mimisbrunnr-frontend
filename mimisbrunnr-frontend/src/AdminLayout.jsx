import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Admin/Navbar/Navbar';
import ProtectedRoute from './components/Common/ProtectedRoute';
import './AdminLayout.css';

const AdminLayout = () => {
  const [marwanMode, setMarwanMode] = useState(false);

  return (
    <ProtectedRoute roles={['EventEditor', 'MediaEditor', 'SponsorEditor']}>
      <div className="admin-layout">
        <Navbar />
        <main className={`admin-content${marwanMode ? ' admin-content--marwan' : ''}`}>
          <label className="admin-mode-toggle">
            <input
              type="checkbox"
              role="switch"
              checked={marwanMode}
              onChange={(event) => setMarwanMode(event.target.checked)}
            />
            Marwan Mode
          </label>
          <Outlet />
        </main>
        <ScrollRestoration />
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
