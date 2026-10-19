import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Admin/Navbar/Navbar';
import ProtectedRoute from './components/Common/ProtectedRoute';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <ProtectedRoute roles={['EventEditor', 'MediaEditor', 'SponsorEditor']}>
      <div className="admin-layout">
        <Navbar />
        <main className="admin-content"><Outlet /></main>
        <ScrollRestoration />
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
