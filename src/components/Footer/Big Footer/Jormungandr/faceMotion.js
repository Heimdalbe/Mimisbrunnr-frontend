import parts from './face.json';

export function createFaceAnimation(root) {
  const paths = parts.map((part) => ({ ...part, node: root.querySelector(`[data-face="${part.id}"]`) }));
  let frame = 0;
  function draw(time) {
    const blink = Math.sin(Math.PI * Math.max(0, Math.min(1, (time - .16) / .32)));
    const wave = Math.sin(Math.PI * Math.max(0, Math.min(1, (time - .58) / 1.1)));
    for (const part of paths) {
      part.node.setAttribute('d', part.contours.map((contour) => contour.map(([x, y], i) => {
        if (part.kind === 'eye') y = 50 + (y - 50) * (1 - .97 * blink ** 1.6);
        if (part.kind === 'tongue') {
          const t = Math.max(0, Math.min(1, (70 - y) / 55));
          x += wave * 4 * t * t * (3 - 2 * t) * Math.sin(y / 10 + time * 15);
        }
        return `${i ? 'L' : 'M'}${x.toFixed(3)},${y.toFixed(3)}`;
      }).join(' ') + 'Z').join(' '));
    }
  }
  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    draw(0);
  }
  return {
    reset,
    play() {
      if (frame || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const start = performance.now();
      const tick = (now) => {
        const time = (now - start) / 1000;
        if (time >= 1.8 || matchMedia('(prefers-reduced-motion: reduce)').matches) return reset();
        draw(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    },
  };
}
