import { Link } from 'react-router';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Strofe from '../../../components/Clublied/Strofe';
import OverOnsBanner from '../OverOnsBanner';
import './Clublied.css';

const refrein = [
  'Heimdal, Heimdal, club van mijn hart',
  'waar ik altijd mezelf kan zijn!',
  'Geloofd, geliefd, zijt gij voor mij.',
  'Heimdal, met ons schoon wit en ons zwart.',
];

const Clublied = () => {
  return (
    <div className="clublied-page">
      <OverOnsBanner />
      <div className="container clublied-wrapper">
        <Breadcrumbs children={[{ link: 'over-ons', label: 'Over ons' }, { link: 'clublied', isLast: true }]} />
        <h1>Clublied</h1>
        <div className="clublied-lyrics">
          <Strofe titel="Refrein" lijnen={refrein} />
          <Strofe
            titel="Strofe 1"
            lijnen={['Hoera nu, met z\'n allen, gaan wij alweer knallen', 'Samen, vriend en schild, maak plezier!']}
          />
          <Strofe titel="Refrein" lijnen={refrein} />
          <Strofe
            titel="Strofe 2"
            lijnen={[
              'Comic Sans, ons café, is gevuld tot de nok.',
              'Komt nader, schuif erbij met ons!',
              'May the force be with you en je broeders nabij.',
            ]}
          />
          <Strofe titel="Refrein" lijnen={refrein} />
        </div>
        <div className="clublied-credits">
          <p>Tekst geschreven door Joren Debois</p>
          <p>
            Clublied wordt gezongen op de melodie van{' '}
            <Link target="_blank" to="https://www.youtube.com/watch?v=DnlUfPlLjKs">
              Dovahkiin - Skyrim theme song
            </Link>
          </p>
          <p>
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1ZGgB01GxJnpbXsGH8qoUQsIfzl93meCI/view?usp=drive_link"
            >
              Ingezongen versie
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clublied;
