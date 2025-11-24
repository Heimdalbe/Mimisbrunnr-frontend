import './VisieSectie.css';
import KernwaardenList from './Kernwaarden/KernwaardenList';
import kernwaarden from '../../../api/kernwaarden';

const VisieSectie = () => {
  return (
    <div className='container vision-section'>
      <div className='vision-info-section'>
        <div>
          <h1>Onze visie</h1>
          <p>Dit is een plaatsvervangend tekstje om wat meer info te geven over de visie van Heimdal die we dus voor ogen hebben. Hieronder komt er ook een opsomming voor de kernwaarden te noteren.</p>
        </div>
        <KernwaardenList kernwaarden={kernwaarden} />
      </div>
      <div className='vision-image-section'>
        <div>
          <img src='./Groepsfoto1.jpg' className='v-pic1'></img>
          <img src='./VisieFoto2.jpg' className='v-pic2'></img>
        </div>
      </div>
    </div>
  )
}

export default VisieSectie;