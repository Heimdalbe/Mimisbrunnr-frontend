import "./PdfViewer.css";

const PdfViewer = ({ bestand }) => {
  return (
    <div>
      <iframe src={bestand} width="100%"></iframe>
    </div>
  );
};

export default PdfViewer;
