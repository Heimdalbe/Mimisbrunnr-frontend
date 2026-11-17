import { useEffect } from 'react';
import LoadingImage from '../LoadingImage/LoadingImage';
import './Lightbox.css';

const LightBox = ({ images = [], activeIndex, setActiveIndex }) => {
  const image = images[activeIndex];

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
  }, [activeIndex, images.length, setActiveIndex]);

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

    <LoadingImage src={typeof image === 'string' ? image : image?.url}
      alt={image?.description ?? ''} className="lightbox-photo" loading="eager" />
  </div>;
};

export default LightBox;
