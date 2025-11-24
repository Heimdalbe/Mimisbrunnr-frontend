import PrimaryButton from '../../Common/PrimaryButton';
import ImageGrid from '../../Images/ImageGrid';
import './FotoSectie.css';

const FotoSectie = () => {
  return (
    <div className='container' style={{ paddingTop: 5 }}>
      <h1>Enkele sfeerbeelden</h1>
      <ImageGrid images={["Groepsfoto4.jpg", "Groepsfoto1.jpg", "Groepsfoto2.jpg", "Groepsfoto3.jpg", "Groepsfoto4.jpg", "Groepsfoto1.jpg", "Groepsfoto2.jpg", "Groepsfoto3.jpg", "Groepsfoto4.jpg"]} />
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