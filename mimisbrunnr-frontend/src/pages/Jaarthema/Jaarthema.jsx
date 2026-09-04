import './Jaarthema.css';

const Jaarthema = () => {
  return (
    <div className="jaarthema">
      <h2>Jaarthema '26-'27</h2>
      <h3>🥁 Het nieuwe jaarthema is hier!</h3>
      <p>
        Het is weer september dus dat betekent een nieuw jaarthema! Benieuwd naar wat het dit schooljaar geworden is? 🧐
      </p>
      <p>Ontdek het in onderstaande video...</p>
      <p>
        Groetjes jullie doopcomité 2026-2027:{' '}
        <b>Kobe, Auréline, Jasper, Zeaya, Mauro, Marwan, Simon, Alejandro, Robbe</b>
      </p>
      <video className="vid" controls>
        <source
          src="https://jormungandr-data.s3.eu-west-2.amazonaws.com/Jaarthema+Video+2026-2027.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Jaarthema;
