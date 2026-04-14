import { useEffect } from 'react';
import "./Lightbox.css"

const LightBox = ({ images = [], activeIndex, setActiveIndex }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          setActiveIndex((activeIndex - 1 + images.length) % images.length);
          break;
        case 'ArrowRight':
          setActiveIndex((activeIndex + 1) % images.length);
          break;
        case 'Escape':
          setActiveIndex(null);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, images.length]);

  return <div className="lightbox" onClick={() => setActiveIndex(null)}>
    <button
      className="lightbox-close"
      onClick={(e) => {
        e.stopPropagation();
        setActiveIndex(null);
      }}
    >
      &times;
    </button>
    <div className="navigate-buttons">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveIndex((activeIndex - 1 + images.length) % images.length);
        }}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveIndex((activeIndex + 1) % images.length);
        }}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>

    <img src={images[activeIndex]} alt="" />
  </div>
}

export default LightBox