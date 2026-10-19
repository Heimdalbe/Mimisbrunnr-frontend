import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Admin/Navbar/Navbar';
import ProtectedRoute from './components/Common/ProtectedRoute';

const AdminLayout = () => {
  return (
    <ProtectedRoute roles={['EventEditor', 'MediaEditor', 'SponsorEditor']}>
      <div>
        <Navbar />
        <div className="admin-content"><Outlet /></div>
        <ScrollRestoration />
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
