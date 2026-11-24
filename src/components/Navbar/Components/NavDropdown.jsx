import { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ label, to, links }) => {
  const [open, setOpen] = useState(false);
  const submenu = useId();
  const toggle = useRef(null);

  const handleHover = (event, expanded) => {
    if (event.pointerType === 'mouse' && matchMedia('(min-width: 1029px)').matches) setOpen(expanded);
  };

  return (
    <div className={`nav-dropdown ${open ? 'open' : ''}`}
      onPointerEnter={(event) => handleHover(event, true)}
      onPointerLeave={(event) => handleHover(event, false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
          toggle.current.focus();
        }
      }}
    >
      <div className="nav-dropdown-label">
        <Link to={to} onClick={() => setOpen(false)}>{label}</Link>
        <button ref={toggle} type="button" className="nav-dropdown-toggle" aria-label={`Submenu ${label}`}
          aria-controls={submenu} aria-expanded={open} onClick={() => setOpen((previous) => !previous)}>
          <i className="fa-solid fa-angle-down" aria-hidden="true" />
        </button>
      </div>

      <div id={submenu} className="submenu" hidden={!open}>
        {links.map((item) => (
          <Link key={item.to} to={item.to} className="submenu-item" onClick={() => setOpen(false)}>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
