import { useState, useEffect } from "react";
import KarakteristiekCard from "../Karakteristiek/KarakteristiekCard";
import './KarakteristiekList.css';

// TODO: overgang synchroniseren met change bg image
// TODO: mobiele versie (ongeveer hetzelfde als event card, maar ook autoplay verschuiven)

const KarakteristiekList = ({ characteristics, activeIndex }) => {
  return (
    <div className="card-wrapper">
      {characteristics.map((ch, index) => (
        <KarakteristiekCard
          key={index}
          iconClass={ch.iconClass}
          name={ch.name}
          text={ch.text}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
}

export default KarakteristiekList;