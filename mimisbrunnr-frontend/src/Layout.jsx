import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default Layout;