import './Jaarthema.css';

const Jaarthema = () => {
  return (
    <div className="container-sm-tm jaarthema">
      <h1>Jaarthema '26-'27</h1>
      <p> 
        Het is weer september dus dat betekent een nieuw jaarthema! Benieuwd naar wat het dit schooljaar geworden is? 🧐 <br/> 
        Ontdek het in onderstaande video...
      </p>
      <video className="vid" controls>
        <source
          src="https://jormungandr-data.s3.eu-west-2.amazonaws.com/Jaarthema+Video+2026-2027.mp4"
          type="video/mp4"
        />
      </video>
      <p>Groetjes jullie doopcomité 2026-2027:{' '}</p>
      <p><b>Kobe, Auréline, Jasper, Zeaya, Mauro, Marwan, Simon, Alejandro, Robbe</b></p>
    </div>
  );
};

export default Jaarthema;
