import './Erestuff.css';

const Erestuff = () => {
  return (
    <div className="erestuff">
      <h2>Erestuff</h2>
      <p>Een pagina voor alle dingen die de vereniging gediend hebben</p>

      <div className="erestuff-item">
        <p>
          Deze auto, de Citroën C3, heeft tijdens de praesidiumjaren van Sander De Bruyker heel veel kilometers gereden
          in naam van Heimdal. Daarnaast heeft deze hier ook een gebroken onderplaat en een gebarsten linker
          achtervering aan overgehouden. Op deze manier willen we graag een dankje geven aan de C3.
        </p>
        <img className="erestuff-img" src="https://i.imgur.com/HJZgNDT.png" alt="Citroën C3" />
      </div>

      <div className="erestuff-item">
        <p>
          De volgende auto, de Volvo S40, heeft tijdens het eerste praesidiumjaar van Sepp Degroote ook een hele hoop
          kilometers afgelegd. Net op het einde van het jaar heeft de embrayage het begeven en is hij pertotal
          verklaard. Dus bedanken we het Volvotje ook.
        </p>
        <img className="erestuff-img" src="https://i.imgur.com/JRzWqaF.jpg" alt="Volvo S40" />
      </div>
    </div>
  );
};

export default Erestuff;
