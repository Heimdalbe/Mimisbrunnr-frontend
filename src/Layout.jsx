import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SocialsList, { defaultSocials } from './components/Socials/SocialsList';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="socials-wrapper">
        <SocialsList socials={defaultSocials} />
      </div>
      <div className="content-general"><Outlet /></div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;