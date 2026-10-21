import WerkgroepenList from '../../../components/Werkgroepen/WerkgroepenList/WerkgroepenList';
import './Werkgroepen.css';

const werkgroepen = [
  {
    id: 1,
    naam: 'L.E.A.G.U.E.',
    beschrijving:
      'Dé ICT Werkgroep van onze vereniging! L.E.A.G.U.E. (Logistics and Engineering ' +
      'Academic Global User Enforcement) wordt elk jaar opnieuw geleid door de ICT en ' +
      'werkt aan projecten zoals deze website!',
    url: 'https://discord.gg/97c2ahrxDh',
  },
  {
    id: 2,
    naam: 'Feest & LAN werkgroep',
    beschrijving:
      'Deze werkgroep staat in voor het helpen bij alles omtrent onze jaarlijkse LAN ' +
      'party! De Feest & LAN van dat jaar leidt deze werkgroep en zorgt ervoor dat ' +
      'alle taken verdeeld en opgevolgd worden.',
    url: 'https://discord.gg/WvguA3ArFq',
  },
  {
    id: 3,
    naam: 'Comic Sans vrijwilligers',
    beschrijving:
      'De Comic Sans is al jaren lang ons Petercafé, en organiseert zelf ook veel ' +
      'leuke evenementen. Als er hierbij hulp nodig is, dan wordt er gekeken naar de ' +
      'vrijwilligers werkgroep om in te springen. Wil je dit steunen? Sluit je dan ' +
      'gerust aan!',
    url: 'https://discordapp.com/users/531910867462258688',
  },
];

const Werkgroepen = () => {
  return (
    <div className="container-sm-tm werkgroepen-page">
      <h1>Werkgroepen</h1>
      <p className="werkgroepen-intro">
        Naast het praesidium draait Heimdal op de inzet van tal van studenten die graag de handen uit de mouwen steken.
        Dat doen ze in onze werkgroepen: kleine teams die elk een eigen taak oppakken, van het bouwen van deze website
        tot het organiseren van onze jaarlijkse LAN party. Zin om mee te helpen? Je hoeft geen ervaring te hebben, enkel
        goesting! Ontdek hieronder wat elke werkgroep doet en sluit aan via de bijhorende Discord.
      </p>
      <WerkgroepenList werkgroepen={werkgroepen} />
    </div>
  );
};

export default Werkgroepen;
