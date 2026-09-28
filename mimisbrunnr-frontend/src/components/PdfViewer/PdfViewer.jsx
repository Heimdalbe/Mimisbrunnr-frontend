import './PdfViewer.css';

const PdfViewer = ({ bestand }) => {
  return (
    <div className="pdf-container">
      <iframe src={bestand} width="100%" height="100%"></iframe>
    </div>
  );
};

export default PdfViewer;
