import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import rest from './rest.svg?raw';
import { createFaceAnimation } from './faceMotion';
import './Jormungandr.css';

const SnakeGame = lazy(() => import('../../../Games/Snake/SnakeGame'));

export default function Jormungandr() {
  const [open, setOpen] = useState(false);
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
        setOpen(true);
        dialog.current.showModal();
      }}
    >
      <span ref={svg} dangerouslySetInnerHTML={{ __html: rest }} />
    </button>
    <dialog ref={dialog} className="footer-dragon-dialog" aria-label="Jormungandr Snake"
      onClose={() => setOpen(false)}>
      {open && <Suspense fallback={<p role="status">Spel laden…</p>}>
        <SnakeGame onClose={() => dialog.current.close()} />
      </Suspense>}
    </dialog>
  </>;
}
