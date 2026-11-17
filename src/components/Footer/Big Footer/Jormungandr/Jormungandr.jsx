import { useEffect, useRef } from 'react';
import rest from './rest.svg?raw';
import { createFaceAnimation } from './faceMotion';
import './Jormungandr.css';

export default function Jormungandr() {
  const svg = useRef(null);
  const face = useRef(null);
  const dialog = useRef(null);

  useEffect(() => {
    face.current = createFaceAnimation(svg.current);
    return () => face.current.reset();
  }, []);

  return <>
    <button
      className="jormungandr footer-dragon-trigger"
      aria-label="Jormungandr Snake"
      onPointerEnter={() => face.current?.play()}
      onFocus={() => face.current?.play()}
      onClick={() => {
        face.current?.reset();
        dialog.current.showModal();
      }}
    >
      <span ref={svg} dangerouslySetInnerHTML={{ __html: rest }} />
    </button>
    <dialog ref={dialog} className="footer-dragon-dialog">
      <h2>Jormungandr Snake</h2>
      <p>Nog niet klaar.</p>
      <button onClick={() => dialog.current.close()}>Terug</button>
    </dialog>
  </>;
}
