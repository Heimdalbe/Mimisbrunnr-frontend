import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const PdfViewer = ({ bestand }) => {
  const [loaded, setLoaded] = useState({ bestand: null, numPages: 0 });
  const [width, setWidth] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  const numPages = loaded.bestand === bestand ? loaded.numPages : 0;

  return (
    <div className="pdf-viewer" ref={container}>
      <Document
        key={bestand}
        suspense={false}
        file={bestand}
        onLoadSuccess={({ numPages }) => setLoaded({ bestand, numPages })}
        loading="PDF laden..."
        error={<p role="alert">De PDF kon niet worden geladen.</p>}
      >
        {width > 0 && Array.from({ length: numPages }, (_, i) => (
          <Page
            key={`${bestand}-${i + 1}`}
            pageNumber={i + 1}
            width={width}
            devicePixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="pdf-page"
          />
        ))}
      </Document>
      <p className="pdf-fallback">
        <a href={bestand} target="_blank" rel="noreferrer">Open de PDF in een nieuw tabblad</a>
      </p>
    </div>
  );
};

export default PdfViewer;
