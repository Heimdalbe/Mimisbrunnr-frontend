import artwork from './curved.json';

export function createFooterFlight(svg, image, { width, height, box, speed: initialSpeed }, ui = null) {
  const ns = 'http://www.w3.org/2000/svg';
  const leadIn = 1.8;
  const joint = [65.581, 118.907];
  const rest = [joint, [45.511, 147.58], [36, 169], [41, 194], [62, 222], [85, 253], [99, 307],
    [115, 265], [120, 220], [120, 192], [142, 170], [170, 165], [198, 170], [220, 192], [220, 220],
    [235, 285], [245, 320], [260, 265], [260, 220], [260, 192], [282, 170], [310, 165], [338, 170],
    [360, 192], [360, 220], [380, 285], [416, 367], [482, 433]];
  const [a, b, c, d, e, f] = artwork.matrix;
  const scale = box.width / 2872;
  const artScale = Math.hypot(a, b) * scale;
  const world = ([x, y]) => [box.x + (a * x + c * y + e) * scale, box.y + (b * x + d * y + f) * scale];
  const worldRest = rest.map(world).reverse();
  const anchor = world(joint);
  const forward = world(rest[1]).map((v, i) => anchor[i] - v);
  const flight = [
    anchor.map((v, i) => v + forward[i]),
    [anchor[0] + box.width * .14, anchor[1] - box.width * .4],
    [anchor[0] + box.width * .48, anchor[1] - box.width * .44],
    [width + box.width * .2, anchor[1] - box.width * .12],
    [width + box.width * .65, anchor[1] + box.width * .45],
    [width + box.width * 1.15, height + box.width * .8],
  ];
  const controls = [...worldRest, ...flight];
  const raw = [], stations = [];
  let total = 0;
  function curve(index, t) {
    const n = controls.length;
    const p = [-1, 0, 1, 2].map((j) => controls[(index + j + n) % n]);
    const u = 1 - t, t2 = t * t, t3 = t2 * t;
    const weights = [u * u * u, 3 * t3 - 6 * t2 + 4, -3 * t3 + 3 * t2 + 3 * t + 1, t3];
    const derivatives = [-3 * u * u, 9 * t2 - 12 * t, -9 * t2 + 6 * t + 3, 3 * t2];
    return {
      x: p.reduce((sum, v, i) => sum + v[0] * weights[i] / 6, 0),
      y: p.reduce((sum, v, i) => sum + v[1] * weights[i] / 6, 0),
      tx: p.reduce((sum, v, i) => sum + v[0] * derivatives[i] / 6, 0),
      ty: p.reduce((sum, v, i) => sum + v[1] * derivatives[i] / 6, 0),
    };
  }
  for (let i = 0; i < controls.length; i++) {
    const n = controls.length;
    const length = [0, 1, 2].reduce((sum, j) => sum + Math.hypot(
      controls[(i + j) % n][0] - controls[(i + j - 1 + n) % n][0],
      controls[(i + j) % n][1] - controls[(i + j - 1 + n) % n][1]), 0);
    const steps = Math.max(40, Math.ceil(length / .2));
    for (let j = 0; j < steps; j++) {
      const p = curve(i, j / steps);
      if (raw.length) total += Math.hypot(p.x - raw.at(-1).x, p.y - raw.at(-1).y);
      if (!j) stations[i] = total;
      raw.push({ ...p, distance: total });
    }
  }
  total += Math.hypot(raw[0].x - raw.at(-1).x, raw[0].y - raw.at(-1).y);
  raw.push({ ...raw[0], distance: total });
  const count = Math.ceil(total / .1), spacing = total / count;
  const table = [];
  let cursor = 1;
  for (let i = 0; i <= count; i++) {
    const distance = i * spacing;
    while (cursor < raw.length - 1 && raw[cursor].distance < distance) cursor++;
    const p = raw[cursor - 1], q = raw[cursor], u = (distance - p.distance) / (q.distance - p.distance);
    const tx = p.tx + (q.tx - p.tx) * u, ty = p.ty + (q.ty - p.ty) * u, length = Math.hypot(tx, ty);
    table.push({ x: p.x + (q.x - p.x) * u, y: p.y + (q.y - p.y) * u, tx: tx / length, ty: ty / length });
  }
  function at(distance) {
    const position = ((distance % total + total) % total) / spacing;
    const i = Math.min(count - 1, Math.floor(position)), u = position - i;
    const p = table[i], q = table[i + 1];
    const tx = p.tx + (q.tx - p.tx) * u, ty = p.ty + (q.ty - p.ty) * u, length = Math.hypot(tx, ty);
    return { x: p.x + (q.x - p.x) * u, y: p.y + (q.y - p.y) * u, tx: tx / length, ty: ty / length };
  }
  const start = stations[worldRest.length - 1];
  const returnStart = total - start;
  const bodyLength = start;
  function clip(contour, boundary, side, slope = 0) {
    const output = [];
    for (let i = 0; i < contour.length; i++) {
      const p = contour[(i + contour.length - 1) % contour.length], q = contour[i];
      const dp = side * (p[1] - boundary - slope * (p[0] - joint[0]));
      const dq = side * (q[1] - boundary - slope * (q[0] - joint[0]));
      if ((dp >= 0) !== (dq >= 0)) {
        const t = dp / (dp - dq); output.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]);
      }
      if (dq >= 0) output.push(q);
    }
    return output.length > 2 ? output : [];
  }
  function node(tag, attributes, parent = svg) {
    const element = document.createElementNS(ns, tag);
    for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
    parent.append(element); return element;
  }
  function toPath(contours, warp) {
    return contours.map((contour) => contour.map((point, i) => {
      const p = warp(point); return `${i ? 'L' : 'M'}${p[0].toFixed(3)},${p[1].toFixed(3)}`;
    }).join(' ') + 'Z').join(' ');
  }
  const bodyGroup = node('g', { id: 'continuous-body' });
  const headGroup = node('g', { id: 'separate-head' });
  const headParts = [];
  for (const shape of artwork.shapes) {
    const belongsToHead = [17, 36, 37, 38, 40, 41, 42, 45, 47, 50, 56, 97].includes(shape.id);
    const head = belongsToHead
      ? shape.contours.map((p) => clip(p, joint[1], -1, .7)).filter((p) => p.length) : [];
    if (head.length) {
      const attributes = { fill: shape.fill, stroke: shape.fill, 'stroke-width': 1, 'stroke-linejoin': 'round' };
      if (shape.id === 50) node('path', { ...attributes, fill: '#016634', stroke: '#016634',
        d: toPath(head, (p) => p) }, headGroup);
      headParts.push({ ...shape, contours: head, node: node('path', attributes, headGroup) });
    }
  }
  const halfWidth = 26.3 * artScale;
  const bandLength = 82 * artScale;
  const smooth = (v) => {
    v = Math.max(0, Math.min(1, v)); return v * v * (3 - 2 * v);
  };
  const bodyPaths = ['#016634', '#038c38', '#37a936'].map((fill) =>
    node('path', { fill, stroke: fill, 'stroke-width': .5, 'stroke-linejoin': 'round' }, bodyGroup));
  const restHead = at(start);
  const restAngle = Math.atan2(restHead.ty, restHead.tx);
  const matrix = `matrix(${a * scale} ${b * scale} ${c * scale} ${d * scale}`
    + ` ${box.x + e * scale} ${box.y + f * scale})`;
  let speed = initialSpeed, duration = 0, elapsed = 0, playing = false, last = 0, frame = 0, lastFace = null;
  function travelAt(time) {
    return Math.max(0, Math.min(total, (time - leadIn) * velocity()));
  }
  function draw(time) {
    const travel = travelAt(time);
    const position = time >= duration ? 0 : travel;
    const head = at(start + position);
    const angle = Math.atan2(head.ty, head.tx) - restAngle;
    function edge(distance, side) {
      const p = at(start + position - distance);
      const t = Math.max(0, Math.min(1, (bodyLength - distance) / (100 * artScale)));
      const taper = t * t * t * (t * (6 * t - 15) + 10);
      const offset = halfWidth * taper * side;
      return [p.x - p.ty * offset, p.y + p.tx * offset];
    }
    function strip(from, to, left, right) {
      const steps = Math.max(2, Math.ceil((to - from) / 2));
      const points = [];
      for (let i = 0; i <= steps; i++) points.push(edge(from + (to - from) * i / steps, left));
      for (let i = steps; i >= 0; i--) points.push(edge(from + (to - from) * i / steps, right));
      return toPath([points], (p) => p);
    }
    bodyPaths[0].setAttribute('d', strip(-artScale, bodyLength, -1, 1));
    bodyPaths[1].setAttribute('d', strip(-artScale, bodyLength, 0, 1));
    const bands = [];
    for (let distance = bandLength; distance < bodyLength; distance += bandLength * 2) {
      bands.push(strip(distance, Math.min(bodyLength, distance + bandLength), 0, 1));
    }
    bodyPaths[2].setAttribute('d', bands.join(' '));
    headGroup.setAttribute('transform', `translate(${head.x} ${head.y}) rotate(${angle * 180 / Math.PI})`
      + ` translate(${-restHead.x} ${-restHead.y}) ${matrix}`);
    const face = time < leadIn ? time : -1;
    if (lastFace !== face) {
      const blink = Math.sin(Math.PI * Math.max(0, Math.min(1, (time - .16) / .32)));
      const wave = Math.sin(Math.PI * Math.max(0, Math.min(1, (time - .58) / 1.1)));
      for (const part of headParts) {
        part.node.setAttribute('d', toPath(part.contours, ([x, y]) => {
          if (part.part === 'eye') y = 50 + (y - 50) * (1 - .97 * blink ** 1.6);
          if (part.part === 'tongue') x += wave * 4 * smooth((70 - y) / 55) * Math.sin(y / 10 + time * 15);
          return [x, y];
        }));
      }
      lastFace = face;
    }
    if (ui) {
      ui.scrub.value = Math.round(time / duration * 1000);
      ui.time.textContent = format(time);
      ui.status.textContent = !time ? 'Klaar voor een hover' : time < .55 ? '01 · Knipperen'
        : time < leadIn ? '02 · Tonggolf'
          : travel >= returnStart ? '04 · Terug naar zijn plek' : '03 · Op pad';
    }
  }
  function format(seconds) {
    return Math.floor(seconds / 60) + ':' + Math.floor(seconds % 60).toString().padStart(2, '0');
  }
  function velocity() {
    return box.width * .16 * speed;
  }
  function updateTiming() {
    duration = leadIn + total / velocity();
    if (ui) ui.duration.textContent = format(duration);
  }
  function reset() {
    cancelAnimationFrame(frame); playing = false; elapsed = 0; draw(0);
  }
  function tick(now) {
    if (!playing) return;
    elapsed += (now - last) / 1000; last = now;
    if (elapsed >= duration) {
      reset(); return;
    }
    draw(elapsed); frame = requestAnimationFrame(tick);
  }
  function play(restart = true) {
    if (playing) return;
    if (restart) elapsed = 0;
    playing = true; last = performance.now(); frame = requestAnimationFrame(tick);
  }
  function pause() {
    playing = false; cancelAnimationFrame(frame);
  }
  function setSpeed(value) {
    const distance = Math.max(0, (elapsed - leadIn) * velocity());
    const waiting = elapsed <= leadIn;
    speed = value; updateTiming();
    if (!waiting) elapsed = leadIn + distance / velocity();
    draw(elapsed);
  }
  function seek(value) {
    pause(); elapsed = value * duration; draw(elapsed);
  }
  updateTiming(); reset();
  image.style.opacity = '0'; svg.style.opacity = '1';
  return { play, pause, reset, setSpeed, seek, dispose() {
    pause(); image.style.opacity = ''; svg.replaceChildren();
  } };
}
