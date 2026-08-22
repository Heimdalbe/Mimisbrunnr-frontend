import { useState, useEffect } from 'react';
import KarakteristiekList from './KarakteristiekList/KarakteristiekList';
import './KarakteristiekenSectie.css';

const characteristics = [
  {
    id: 1,
    iconClass: 'fa-solid fa-display',
    name: 'TI HOGENT',
    text: 'Officiële studentenvereniging van toegepaste informatica aan de HOGENT.',
  },
  {
    id: 2,
    iconClass: 'fa-solid fa-hand-spock',
    name: 'GEEKS',
    text: 'Hello there! These are the people you are looking for.',
  },
  {
    id: 3,
    iconClass: 'fa-solid fa-gamepad',
    name: 'GAMERS',
    text: 'Van een potje Skyrim tot een ronde Mario Kart. Er staat gegarandeerd iemand paraat om te joinen.',
  },
  {
    id: 4,
    iconClass: 'fa-solid fa-paintbrush',
    name: 'JAARTHEMA',
    text: 'Jaarlijks staan onze events in het teken van een nieuw uitgekozen pop culture thema.',
  },
];

const KarakteristiekenSectie = () => {
  const images = [
    './Groepsfoto1.jpg',
    './Groepsfoto2.jpg',
    './Groepsfoto3.jpg',
    './Groepsfoto4.jpg',
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [cardsIndex, setCardsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop: sync image + card autoplay
  useEffect(() => {
    if (isMobile) return; // Alleen desktop

    const interval = setInterval(() => {
      setCardsIndex((prev) => (prev + 1) % characteristics.length);
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isMobile, images.length]);

  // Mobile: alleen cards autoplay
  useEffect(() => {
    if (!isMobile) return; // Alleen mobiel

    const interval = setInterval(() => {
      setCardsIndex((prev) => (prev + 1) % characteristics.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const displayedImageIndex = isMobile ? 3 : imageIndex;

  return (
    <div className='line-container'>
      <div className='group-picture-wrapper'>
        {images.map((img, index) => (
          <img
            key={index}
            className={`group-picture ${index === displayedImageIndex ? 'active' : ''}`}
            src={img}
            alt='Groepsfoto'
          />
        ))}
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
