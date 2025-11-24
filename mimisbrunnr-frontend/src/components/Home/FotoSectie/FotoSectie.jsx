import PrimaryButton from '../../Common/PrimaryButton';
import './FotoSectie.css';

// TODO: Sfeerbeeldsectie

const FotoSectie = () => {
  return (
    <div className='container' style={{ paddingTop: 5 }}>
      <h1>Enkele sfeerbeelden</h1>
      <p>insert grid...</p>
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