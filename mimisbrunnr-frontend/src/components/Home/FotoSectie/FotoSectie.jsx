import { useState, useEffect } from 'react';
import PrimaryButton from '../../Common/PrimaryButton';
import './FotoSectie.css';

const FotoSectie = () => {
  const allImages = [
    "Groepsfoto1.jpg",
    "Groepsfoto2.jpg",
    "Groepsfoto3.jpg",
    "BackgroundImg1.png",
    "Groepsfoto1.jpg",
    "Groepsfoto2.jpg",
    "Groepsfoto3.jpg"
  ];

  const areas = ['a','b','c','d','e','f','g']
  const [activeIndex, setActiveIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeIndex]);

  const images = windowWidth <= 768 ? allImages.slice(0,5) : allImages;
  const areasToUse = windowWidth <= 768 ? areas.slice(0,5) : areas;

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

  const openLightbox = (index) => setActiveIndex(index);
  
  return (
    <div>
      <div className='container-sm-tm' style={{ paddingTop: 5 }}>
        <h1>Enkele sfeerbeelden</h1>
      </div>
      
      <div className='container-fw-mobile' style={{ paddingTop: 0, paddingBottom: 0}}>
        <div className='fixed-image-grid'>
          {images.map((src, i) => (
            <div 
              key={i} 
              className="fixed-image-grid-item" 
              style={{ gridArea: areasToUse[i] }}
              onClick={() => openLightbox(i)}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
      
      <div className='container-sm-bm'>
        <div className="button-wrapper">
          <PrimaryButton
            text='Bekijk alles'
            to='/albums'
            isLight={false}
            isDisabled={false} 
          />
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
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
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((activeIndex + 1) % images.length);
              }}
            >
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
          
          <img src={images[activeIndex]} alt="" />
        </div>
      )}
    </div>
  );
}

export default FotoSectie;
