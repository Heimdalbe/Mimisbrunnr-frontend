import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';

const groups = [
  { title: 'Website', links: [
    ['/admin/accounts', 'Accounts'], ['/admin/albums', 'Albums'],
    ['/admin/events', 'Events'], ['/admin/sponsors', 'Sponsors'],
  ] },
  { title: 'Praesidium', links: [
    ['/admin/ledengegevens', 'Ledengegevens'], ['/admin/praesidiumleden', 'Praesidiumleden'],
    ['/admin/functies', 'Functies'], ['/admin/superschachten', 'Superschachten'],
    ['/admin/ereleden', 'Ereleden'], ['/admin/lustrumleden', 'Lustrumleden'],
    ['/admin/socialtypes', 'Social types'],
  ] },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className={`admin-navbar${menuOpen ? ' admin-navbar--open' : ''}`}>
      <div className="admin-navbar__header">
        <Link to="/admin" className="admin-navbar__brand" onClick={() => setMenuOpen(false)}>
          Heimdal <span>Beheer</span>
        </Link>
        <button
          className="admin-navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="admin-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Sluiten' : 'Menu'}
        </button>
      </div>
      <nav id="admin-navigation" className="admin-navbar__links" aria-label="Administratie">
        <NavLink to="/admin" end onClick={() => setMenuOpen(false)}>Overzicht</NavLink>
        {groups.map(({ title, links }) => (
          <section key={title}>
            <h2>{title}</h2>
            {links.map(([to, text]) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>{text}</NavLink>
            ))}
          </section>
        ))}
        <Link to="/" className="admin-navbar__back">← Naar de website</Link>
      </nav>
    </aside>
  );
};

export default Navbar;
