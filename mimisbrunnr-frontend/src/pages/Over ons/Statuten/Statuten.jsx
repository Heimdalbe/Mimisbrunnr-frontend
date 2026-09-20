import PdfViewer from '../../../components/PdfViewer/PdfViewer';
import statuten from '../../../api/statuten';
import './Statuten.css';

const Statuten = () => {
  return (
    <div className="container-sm-tm">
      <div className="title-button-wrapper">
        <h1>Statuten</h1>
      </div>
      <h2>Laatst aangepast op {statuten.datumAangepast}</h2>
      <PdfViewer bestand={statuten.bestandUrl} />
    </div>
  );
};

export default Statuten;
