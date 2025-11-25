import { useState } from 'react';
import PrimaryButton from '../../Common/PrimaryButton';
import './FotoSectie.css';

const FotoSectie = () => {
  const allImages = [
    "Groepsfoto1.jpg",
    "Groepsfoto2.jpg",
    "Groepsfoto3.jpg",
    "Groepsfoto4.jpg",
    "Groepsfoto1.jpg",
    "Groepsfoto2.jpg",
    "Groepsfoto3.jpg"
  ];

  const areas = ['a','b','c','d','e','f','g']
  const [activeImage, setActiveImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  const images = windowWidth <= 600 ? allImages.slice(0,5) : allImages;
  const areasToUse = windowWidth <= 600 ? areas.slice(0,5) : areas;
  

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
              onClick={() => setActiveImage(src)}
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

      

      {/* Lightbox modal */}
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="" />
        </div>
      )}
    </div>
  );
}

export default FotoSectie;
