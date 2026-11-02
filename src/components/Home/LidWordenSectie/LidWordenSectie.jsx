import useSWR from 'swr';
import { getAll } from '../../../api';
import './LidWordenSectie.css';

const euro = new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' });

const MembershipFeeText = () => {
  const { data: fees } = useSWR('membership-fees', getAll);

  return fees
    ? `Volg de betaalinstructies van het praesidium: ${euro.format(fees.firstYearFee)} voor je eerste lidjaar, `
      + `daarna ${euro.format(fees.renewalFee)} per jaar.`
    : 'Vraag het actuele lidgeld en de betaalinstructies aan het praesidium.';
};

const LidWordenSectie = () => (
  <section className="container membership-section" aria-labelledby="membership-title">
    <h1 id="membership-title">Hoe word je lid?</h1>
    <p>Geeks, gamers en nieuwe gezichten: iedereen is welkom bij Heimdal.</p>
    <ol className="membership-steps">
      <li>
        <h2>Join onze Discord</h2>
        <p>Stel jezelf voor, leer de groep kennen en ontdek onze activiteiten.</p>
      </li>
      <li>
        <h2>Spreek het praesidium aan</h2>
        <p>Laat via Discord weten dat je lid wilt worden. Het praesidium helpt je verder met je inschrijving.</p>
      </li>
      <li>
        <h2>Betaal je lidgeld</h2>
        <p><MembershipFeeText /></p>
      </li>
    </ol>
    <div className="button-wrapper">
      <a className="link-button" href="https://discord.heimdal.be" target="_blank" rel="noreferrer">
        Join onze Discord
      </a>
    </div>
  </section>
);

export default LidWordenSectie;
