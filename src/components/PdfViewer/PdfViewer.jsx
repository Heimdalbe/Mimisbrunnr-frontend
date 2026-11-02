import { PDFViewer } from '@embedpdf/react-pdf-viewer';

const PdfViewer = ({ bestand }) => {
  return (
    <div>
      <div style={{ height: '100vh', width: '100%' }}>
        <PDFViewer
          key={bestand}
          style={{ width: '100%', height: '100%' }}
          config={{
            src: bestand,
            theme: { preference: 'light' },
            disabledCategories: ['annotation', 'form', 'insert', 'redaction', 'security'],
          }}
        />
      </div>
      <p class="pdf-fallback">
        <a href="/statuten.pdf" target="_blank" rel="noreferrer">
          Open de PDF in een nieuw tabblad
        </a>
      </p>
    </div>
  );
};

export default PdfViewer;
