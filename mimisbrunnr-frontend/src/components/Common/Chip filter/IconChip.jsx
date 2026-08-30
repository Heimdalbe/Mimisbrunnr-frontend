import './Chipfiltering.css';

//TODO: Transition voor icon die van plek veranderd bij active zetten van een chip

const IconChip = ({ label, icon, active, onClick }) => {
  return (
    <div className={`icon-chip ${active ? 'active-chip' : ''}`} onClick={onClick}>
      <i className={`chip-icon fa-solid ${icon} ${active ? 'active-icon' : ''}`}></i>
      <span className="chip-label">{label}</span>
    </div>
  );
};

export default IconChip;
