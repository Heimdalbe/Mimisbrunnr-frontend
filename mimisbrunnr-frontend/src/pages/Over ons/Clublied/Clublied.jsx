import Strofe from '../../../components/Clublied/Strofe';
import { Link } from 'react-router';
import './Clublied.css';

//TODO: Skyrim theme link nog toevoegen
//TODO: Eigendomsrechten uitleg nog toevoegen

const Clublied = () => {
  return (
    <div className="container-sm-tm">
      <div className="clublied-wrapper">
        <h1>Clublied</h1>
        <div>
          <Strofe
            titel={'Refrein'}
            lijnen={[
              'Heimdal, Heimdal, club van mijn hart',
              'waar ik altijd mezelf kan zijn!',
              'Geloofd, geliefd, zijt gij voor mij.',
              'Heimdal, met ons schoon wit en ons zwart.',
            ]}
          />
          <Strofe
            titel={'Strofe 1'}
            lijnen={["Hoera nu, met z'n allen, gaan wij alweer knallen", 'Samen, vriend en schild, maak plezier!']}
          />
          <Strofe
            titel={'Refrein'}
            lijnen={[
              'Heimdal, Heimdal, club van mijn hart',
              'waar ik altijd mezelf kan zijn!',
              'Geloofd, geliefd, zijt gij voor mij.',
              'Heimdal, met ons schoon wit en ons zwart.',
            ]}
          />
          <Strofe
            titel={'Strofe 2'}
            lijnen={[
              'Comic Sans, ons café, is gevuld tot de nok.',
              'Komt nader, schuif erbij met ons!',
              'May the force be with you en je broeders nabij.',
            ]}
          />
          <Strofe
            titel={'Refrein'}
            lijnen={[
              'Heimdal, Heimdal, club van mijn hart',
              'waar ik altijd mezelf kan zijn!',
              'Geloofd, geliefd, zijt gij voor mij.',
              'Heimdal, met ons schoon wit en ons zwart.',
            ]}
          />
        </div>
        <p>Tekst geschreven door Joren Debois</p>
        <p>
          Clublied wordt gezongen op de melodie van{' '}
          <Link target="_blank" to="https://youtu.be/AVy7YPNP_zI">
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
  );
};

export default Clublied;
