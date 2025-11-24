import { useState, useEffect, useRef } from "react";
import KarakteristiekCard from "../Karakteristiek/KarakteristiekCard";
import './KarakteristiekList.css';

const KarakteristiekList = ({ characteristics, activeIndex }) => {
  const cardRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update underline for desktop + mobile
  useEffect(() => {
    const activeCard = cardRefs.current[activeIndex];
    if (activeCard) {
      const { offsetLeft, offsetWidth } = activeCard;
      setUnderlineStyle({
        transform: `translateX(${offsetLeft}px)`,
        transition: "transform 0.5s ease, width 0.5s ease",
        width: offsetWidth + "px",
      });
    }
  }, [activeIndex, isMobile, characteristics]);

  return (
    <div className='card-wrapper'>
      {characteristics.map((ch, index) => (
        <div
          className='activeTracker'
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ 
            opacity: isMobile ? (activeIndex === index ? 1 : 0) : 1, 
            transform: isMobile ? (activeIndex === index ? "translateX(0)" : "translateX(-50px)") : "none", 
            transition: isMobile ? "opacity 0.5s ease, transform 0.5s ease" : "none" 
          }}
        >
          <KarakteristiekCard
            iconClass={ch.iconClass}
            name={ch.name}
            text={ch.text}
            isActive={activeIndex === index}
          />
        </div>
      ))}
      <div 
        className="active-underline" 
        style={underlineStyle}>
      </div>
    </div>
  );
}

export default KarakteristiekList;