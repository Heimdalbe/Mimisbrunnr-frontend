import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Admin/Navbar/Navbar';

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-content"><Outlet /></div>
      <ScrollRestoration />
    </div>
  );
}

export default AdminLayout;