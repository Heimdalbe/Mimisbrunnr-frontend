import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import rest from './rest.svg';
import './Jormungandr.css';

const SnakeGame = lazy(() => import('../../../Games/Snake/SnakeGame'));

export default function Jormungandr() {
  const [open, setOpen] = useState(false);
  const image = useRef(null);
  const svg = useRef(null);
  const flight = useRef(null);
  const dialog = useRef(null);

  useEffect(() => {
    const img = image.current;
    const footer = img.closest('.big-footer');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let cancelled = false;
    let create;
    const setup = () => {
      flight.current?.dispose();
      flight.current = null;
      if (!create || motion.matches) return;
      const parent = footer.getBoundingClientRect();
      const bounds = img.getBoundingClientRect();
      if (!bounds.width) return;
      svg.current.setAttribute('viewBox', `0 0 ${parent.width} ${parent.height}`);
      flight.current = create(svg.current, img, {
        width: parent.width, height: parent.height, speed: 8,
        box: {
          x: bounds.left - parent.left, y: bounds.top - parent.top,
          width: bounds.width, height: bounds.height,
        },
      });
    };
    import('./footerFlight').then((module) => {
      if (cancelled) return;
      create = module.createFooterFlight;
      setup();
    });
    const observer = new ResizeObserver(setup);
    observer.observe(footer);
    img.addEventListener('load', setup);
    motion.addEventListener('change', setup);
    return () => {
      cancelled = true;
      observer.disconnect();
      img.removeEventListener('load', setup);
      motion.removeEventListener('change', setup);
      flight.current?.dispose();
    };
  }, []);

  return <>
    <button
      className="jormungandr footer-dragon-trigger"
      aria-label="Jormungandr Snake"
      onPointerEnter={() => flight.current?.play()}
      onFocus={() => flight.current?.play()}
      onClick={() => {
        flight.current?.reset();
        setOpen(true);
        dialog.current.showModal();
      }}
    >
      <img ref={image} src={rest} alt="" />
    </button>
    <svg ref={svg} className="footer-dragon-flight" aria-hidden="true" />
    <dialog ref={dialog} className="footer-dragon-dialog" aria-label="Jormungandr Snake"
      onClose={() => setOpen(false)}>
      {open && <Suspense fallback={<p role="status">Spel laden…</p>}>
        <SnakeGame onClose={() => dialog.current.close()} />
      </Suspense>}
    </dialog>
  </>;
}
