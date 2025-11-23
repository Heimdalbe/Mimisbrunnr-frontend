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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='dark-bg line-container'>
      <div className='group-picture-wrapper'>
        <img
          className='group-picture'
          src={images[currentIndex]}
          alt='Groepsfoto'
        />
      </div>
      <div className='container'>
        <KarakteristiekList characteristics={characteristics} />
      </div>
    </div>
  );
};

export default KarakteristiekenSectie;
