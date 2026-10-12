import { useState, useEffect } from 'react';
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton';
import LightBox from '../../Common/Lightbox/Lightbox';

import './FotoSectie.css';

const images = [
  'Groepsfoto1.webp',
  'Groepsfoto2.webp',
  'Groepsfoto3.webp',
  'Groepsfoto4.webp',
  'Weekendfoto1.webp',
  'karakoefoto.webp',
  'mariokartfoto.webp',
];

const areas = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const FotoSectie = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  return (
    <div>
      <div className="container-sm-tm" style={{ paddingTop: 5 }}>
        <h1>Enkele sfeerbeelden</h1>
      </div>

      <div className="container-fw-mobile" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="fixed-image-grid">
          {images.map((src, i) => (
            <div
              key={src}
              className="fixed-image-grid-item"
              style={{ gridArea: areas[i] }}
              onClick={() => setActiveIndex(i)}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-sm-bm">
        <div className="button-wrapper">
          <PrimaryButton text="Bekijk alles" to="/albums" isLight={false} isDisabled={false} />
        </div>
      </div>

      {activeIndex !== null && <LightBox images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />}
    </div>
  );
};

export default FotoSectie;
