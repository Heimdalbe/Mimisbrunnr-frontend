import PrimaryButton from '../../components/Common/PrimaryButton/PrimaryButton';
import './Unauthorized.css';

const Unauthorized = () => {
  return (
    <main className="container unauthorized-page">
      <h1>You shall not pass</h1>
      <picture>
        <source media="(prefers-reduced-motion: reduce)" srcSet="/gandalf-you-shall-not-pass.webp" />
        <img
          src="/gandalf-you-shall-not-pass.gif"
          alt="Gandalf houdt de Balrog tegen op de brug van Khazad-dûm."
          width="480"
          height="198"
        />
      </picture>
      <p>Je hebt geen toegang tot deze pagina.</p>
      <PrimaryButton text="Terug naar home" to="/" isLight />
    </main>
  );
};

export default Unauthorized;
