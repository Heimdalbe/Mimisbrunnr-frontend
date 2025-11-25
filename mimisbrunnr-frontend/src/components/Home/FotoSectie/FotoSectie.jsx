import PrimaryButton from '../../Common/PrimaryButton';
import ImageGrid from '../../Afbeeldingen/ImageGrid';
import './FotoSectie.css';

const FotoSectie = () => {
  const images = [
    "Groepsfoto1.jpg",
    "Groepsfoto2.jpg",
    "Groepsfoto3.jpg",
    "Groepsfoto4.jpg",
    "Groepsfoto1.jpg",
    "Groepsfoto2.jpg",
    "Groepsfoto3.jpg"
  ];

  const areas = ['a','b','c','d','e','f','g']

  return (
    <div className='container' style={{ paddingTop: 5 }}>
      <h1>Enkele sfeerbeelden</h1>

      <div className='fixed-image-grid'>
        {images.map((src, i) => (
          <div key={i} className="fixed-image-grid-item" style={{ gridArea: areas[i] }}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div className="button-wrapper">
        <PrimaryButton
          text='Bekijk alles'
          to='/albums'
          isLight={false}
          isDisabled={false} />
      </div>
    </div>
  )
}

export default FotoSectie;
