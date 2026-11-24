import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rest from './rest.svg?raw';
import { createFaceAnimation } from './faceMotion';
import './Jormungandr.css';

const dragonMarkup = { __html: rest };

export default function Jormungandr() {
  const { key, pathname, search } = useLocation();
  const svg = useRef(null);
  const face = useRef(null);

  useEffect(() => {
    const animation = createFaceAnimation(svg.current);
    face.current = animation;
    return animation.reset;
  }, [key]);

  return <Link
    to="/snake"
    state={{ from: `${pathname}${search}#footer` }}
    className="jormungandr footer-dragon-trigger"
    aria-label="Jormungandr Snake"
    onPointerEnter={() => face.current?.play()}
    onFocus={() => face.current?.play()}
    onClick={() => face.current?.reset()}
  >
    <span ref={svg} dangerouslySetInnerHTML={dragonMarkup} />
  </Link>;
}
