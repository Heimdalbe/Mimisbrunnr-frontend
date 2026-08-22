import './VisieSectie.css';
import KernwaardenList from './Kernwaarden/KernwaardenList';

const kernwaarden = [
  {
    id: 1,
    waarde: 'Open voor iedereen',
  },
  {
    id: 2,
    waarde: 'Grote vriendengroep',
  },
  {
    id: 3,
    waarde: 'Iedereen kan zichzelf zijn',
  },
];

const VisieSectie = () => {
  return (
    <div className="container vision-section">
      <div className="vision-info-section">
        <div className="vision-info-section-text">
          <h1>Onze visie</h1>
          <p>
            Wij zijn Heimdal. De studentenvereniging voor geeks en gamers. 
            Samen met onze leden willen wij een leuke community creëren voor iedereen met dezelfde interesses. 
            Dit gaat van een leuke babbel in ons clubcafé de Comic Sans tot een LAN-party in resto D te campus 
            Schoonmeersen van HOGENT tot een leuke Doop in het Citadelpark. Daarnaast organiseren wij doorheen 
            het jaar tal van activiteiten om onze leden in de watten te leggen en een fantastische studententijd 
            te doen beleven.
          </p>
        </div>
        <KernwaardenList kernwaarden={kernwaarden} />
      </div>
      <div className="vision-image-section">
        <div>
          <img src="./Groepsfoto1.jpg" className="v-pic1"></img>
          <img src="./VisieFoto2.jpg" className="v-pic2"></img>
        </div>
      </div>
    </div>
  );
};

export default VisieSectie;
