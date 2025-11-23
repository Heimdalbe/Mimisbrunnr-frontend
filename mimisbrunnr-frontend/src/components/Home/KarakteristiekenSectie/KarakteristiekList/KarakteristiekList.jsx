import { useState, useEffect, useRef } from "react";
import KarakteristiekCard from "../Karakteristiek/KarakteristiekCard";
import './KarakteristiekList.css';

// TODO: overgang synchroniseren met change bg image
// TODO: mobiele versie (ongeveer hetzelfde als event card, maar ook autoplay verschuiven)

const KarakteristiekList = ({ characteristics, activeIndex }) => {
  const cardRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    const activeCard = cardRefs.current[activeIndex];
    if (activeCard) {
      const { offsetLeft, offsetWidth } = activeCard;
      setUnderlineStyle({
        transform: `translateX(${offsetLeft}px)`,
        width: offsetWidth + "px"
      });
    }
  }, [activeIndex]);

  return (
    <div className="card-wrapper">
      {characteristics.map((ch, index) => (
        <div
          className="activeTracker"
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
        >
          <KarakteristiekCard
            iconClass={ch.iconClass}
            name={ch.name}
            text={ch.text}
            isActive={activeIndex === index}
          />
        </div>
      ))}

      <div className="active-underline" style={underlineStyle}></div>
    </div>
  );
}

export default KarakteristiekList;