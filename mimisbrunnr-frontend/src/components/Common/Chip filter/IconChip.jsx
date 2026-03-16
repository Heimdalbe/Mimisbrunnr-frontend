import "./Chipfiltering.css";
import { useState } from "react";

//TODO: Transition voor icon die van plek veranderd bij active zetten van een chip

const IconChip = ({ label, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`icon-chip ${isActive ? "active-chip" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <i
        className={`chip-icon fa-solid ${icon} ${isActive ? "active-icon" : ""}`}
      ></i>
      <span className="chip-label">{label}</span>
    </div>
  );
};

export default IconChip;
