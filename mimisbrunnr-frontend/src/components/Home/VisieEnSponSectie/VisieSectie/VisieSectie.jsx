import './VisieSectie.css'
import KernwaardenList from '../../VisieSectie/Kernwaarden/KernwaardenList';
import kernwaarden from '../../../../api/kernwaarden';

const VisieSectie = () => {
  return (
    <div className='visiesectie'>
      <div>
        <h1>Onze visie</h1>
        <p>Dit is een plaatsvervangend tekstje om wat meer info te geven over de visie van Heimdal die we dus voor ogen hebben. Hieronder komt er ook een opsomming voor de kernwaarden te noteren.</p>
        <KernwaardenList kernwaarden={kernwaarden} />
      </div>
      <div className='visiefoto'>
        <img src='./VisieFoto.png' height={350} width={350} />
      </div>
    </div>
  )
}

export default VisieSectie;