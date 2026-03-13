import "./Chipfiltering.css";

const IconChip = ({ label, icon }) => {
  return (
    <div className="icon-chip">
      <i className={`chip-icon fa-solid ${icon}`}></i>
      <p>{label}</p>
    </div>
  );
};

export default IconChip;
