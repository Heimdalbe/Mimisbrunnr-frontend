import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="content-general"><Outlet /></div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default Layout;