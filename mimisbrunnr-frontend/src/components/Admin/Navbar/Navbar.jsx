import { Link } from 'react-router';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="admin-navbar">
      <div><Link to={'/admin/accounts'}>Accounts</Link></div>
      <div><Link to={'/admin/albums'}>Albums</Link></div>
      <div><Link to={'/admin/events'}>Events</Link></div>
      <div>
        <h4>Praesidium</h4>
        <div><Link to={'/admin/praesidiumleden'}>PraesidiumLeden</Link></div>
        <div><Link to={'/admin/superschachten'}>Superschachten</Link></div>
        <div><Link to={'/admin/ereleden'}>Ereleden</Link></div>
        <div><Link to={'/admin/lustrumleden'}>LustrumLeden</Link></div>
      </div>
      <div>
        <h4>Socials</h4>
        <div><Link to={'/admin/membersocials'}>Member Socials</Link></div>
        <div><Link to={'/admin/socialtypes'}>Social Types</Link></div>
      </div>
      <div><Link to={'/admin/sponsors'}>Sponsors</Link></div>
    </div>
  );
}

export default Navbar;