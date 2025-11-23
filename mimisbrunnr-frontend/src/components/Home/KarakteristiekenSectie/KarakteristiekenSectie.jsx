import { useState, useEffect } from 'react';
import KarakteristiekList from './KarakteristiekList/KarakteristiekList';
import './KarakteristiekenSectie.css';
import characteristics from '../../../api/characteristics';

// TODO: slide animation bij foto's

const KarakteristiekenSectie = () => {
  const images = [
    './Groepsfoto1.jpg',
    './Groepsfoto2.jpg',
    './Groepsfoto3.jpg',
    './Groepsfoto4.jpg'
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [cardsIndex, setCardsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay voor karakteristiek cards (desktop + mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCardsIndex(prev => (prev + 1) % characteristics.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Images: enkel autoplay op desktop
  useEffect(() => {
    if (isMobile) return; // geen autoplay op mobile
    const interval = setInterval(() => {
      setImageIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, images.length]);

  const displayedImageIndex = isMobile ? 3 : imageIndex;

  return (
    <div className='dark-bg line-container'>
      <div className='group-picture-wrapper'>
        <img
          className='group-picture'
          src={images[displayedImageIndex]}
          alt='Groepsfoto'
        />
      </div>
      <div className='container'>
        <KarakteristiekList 
          characteristics={characteristics} 
          activeIndex={cardsIndex}
        />
      </div>
    </div>
  );
};

export default KarakteristiekenSectie;
