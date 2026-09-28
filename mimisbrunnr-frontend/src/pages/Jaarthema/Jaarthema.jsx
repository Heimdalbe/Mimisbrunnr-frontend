import './Jaarthema.css';

const Jaarthema = () => {
  return (
    <div className="container-sm-tm jaarthema">
      <div>
        <h1>Jaarthema '26-'27</h1>
        <p>
          Het is weer september dus dat betekent een nieuw jaarthema! Benieuwd naar wat het dit schooljaar geworden is?
          🧐 <br />
          Ontdek het in onderstaande video...
        </p>
        <video className="vid" controls>
          <source
            src="https://jormungandr-data.s3.eu-west-2.amazonaws.com/Jaarthema+Video+2026-2027.mp4"
            type="video/mp4"
          />
        </video>
        <p>Groetjes jullie doopcomité 2026-2027: </p>
        <p>
          <b>Kobe, Auréline, Jasper, Zeaya, Mauro, Marwan, Simon, Alejandro, Robbe</b>
        </p>
      </div>
      <div>
        <h1>Vorige Jaarthemas</h1>
        <div className="vorige-jaarthemas">
          <ul>
            <li>
              <b>'25-'26</b> How To Train Your Dragon
            </li>
            <li>
              <b>'24-'25</b> Stranger Things
            </li>
            <li>
              <b>'23-'24</b> Pirates of the Caribbean
            </li>
            <li>
              <b>'22-'23</b> The Lord of the Rings
            </li>
            <li>
              <b>'21-'22</b> The Witcher
            </li>
            <li>
              <b>'20-'21</b> Game of Thrones
            </li>
            <li>
              <b>'19-'20</b> Harry Potter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jaarthema;
