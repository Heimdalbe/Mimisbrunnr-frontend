import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const PdfViewer = ({ bestand }) => {
  // Store the page count together with the file it belongs to
  const [loaded, setLoaded] = useState({ bestand: null, numPages: 0 });

  const numPages = loaded.bestand === bestand ? loaded.numPages : 0;

  return (
    <div className="pdf-viewer">
      <Document
        file={bestand}
        onLoadSuccess={({ numPages }) => setLoaded({ bestand, numPages })}
        loading="PDF laden..."
        error="De PDF kon niet worden geladen."
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={`${bestand}-${i + 1}`}
            pageNumber={i + 1}
            width={900}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="pdf-page"
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
