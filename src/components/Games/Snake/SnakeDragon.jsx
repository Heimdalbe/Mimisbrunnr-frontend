import { useLayoutEffect, useRef } from 'react';
import { snakeTick } from './snake';
import { createMotion, dragonFrame, moveMotion } from './snakeVisual';
import headImage from './head.svg';

export default function SnakeDragon({ snake, status }) {
  const body = useRef(null);
  const belly = useRef(null);
  const bands = useRef(null);
  const head = useRef(null);
  const motion = useRef(null);

  useLayoutEffect(() => {
    const previous = motion.current;
    const continuing = previous?.status === 'running' || previous?.status === 'paused';
    if (!previous || (snake !== previous.snake && (status === 'ready' || !continuing))) {
      motion.current = createMotion(snake);
    } else if (snake !== previous.snake) {
      motion.current = moveMotion(previous, snake);
    }

    const current = motion.current;
    current.status = status;
    const start = performance.now() - current.progress * snakeTick;
    let request;

    const paint = (now) => {
      if (status !== 'paused') current.progress = Math.min(1, (now - start) / snakeTick);
      const frame = dragonFrame(current);
      body.current.setAttribute('d', frame.body);
      belly.current.setAttribute('d', frame.belly);
      bands.current.setAttribute('d', frame.bands);
      head.current.setAttribute('transform', frame.head);

      if (status !== 'paused' && current.progress < 1) request = requestAnimationFrame(paint);
    };

    paint(performance.now());
    return () => cancelAnimationFrame(request);
  }, [snake, status]);

  return <g aria-hidden="true">
    <path ref={body} fill="#016634" />
    <path ref={belly} fill="#038c38" />
    <path ref={bands} fill="#37a936" />
    <g ref={head}>
      <image href={headImage} x="-.186624" y="-.740064" width="1.936" height="1.312" />
    </g>
  </g>;
}
