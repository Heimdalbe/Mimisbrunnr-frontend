import { useState, useEffect } from "react";
import KarakteristiekCard from "../Karakteristiek/KarakteristiekCard";
import './KarakteristiekList.css';

// TODO: overgang synchroniseren met change bg image
// TODO: mobiele versie (ongeveer hetzelfde als event card, maar ook autoplay verschuiven)

const KarakteristiekList = ({ characteristics }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === characteristics.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [characteristics.length]);

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