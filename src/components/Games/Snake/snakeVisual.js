export function createMotion(snake) {
  const tail = snake.at(-1);
  const beforeTail = snake.at(-2);
  const trail = tail.map((value, axis) => 2 * value - beforeTail[axis]);
  return { snake, trail, route: [...snake, trail], growth: 0, progress: 1 };
}

export function moveMotion(previous, snake) {
  const growth = snake.length - previous.snake.length;
  const trail = growth ? previous.trail : previous.snake.at(-1);
  const route = growth ? [...snake, trail] : [...snake, trail, previous.trail];
  return { snake, trail, route, growth, progress: 0 };
}

function poseAt(route, offset) {
  const index = Math.min(Math.floor(offset + 0.5), route.length - 1);
  const [x, y] = route[index];
  const [aheadX, aheadY] = route[index - 1];
  const [behindX, behindY] = route[index + 1] ?? [2 * x - aheadX, 2 * y - aheadY];
  const t = index + 0.5 - offset;
  const fromX = (behindX - x) * (1 - t) * 0.5;
  const fromY = (behindY - y) * (1 - t) * 0.5;
  const toX = (aheadX - x) * t * 0.5;
  const toY = (aheadY - y) * t * 0.5;
  const length = Math.hypot(toX - fromX, toY - fromY);

  return {
    x: x + 0.5 + fromX * (1 - t) + toX * t,
    y: y + 0.5 + fromY * (1 - t) + toY * t,
    dx: (toX - fromX) / length,
    dy: (toY - fromY) / length,
  };
}

const coordinate = (value) => Math.round(value * 1000) / 1000;
const edgePoint = ({ x, y, dx, dy, radius }, edge) =>
  `${coordinate(x - dy * radius * edge)},${coordinate(y + dx * radius * edge)}`;

function ribbon(points, inner, outer) {
  const edges = points.map((point) => edgePoint(point, inner));
  for (let i = points.length - 1; i >= 0; i--) edges.push(edgePoint(points[i], outer));
  return `M${edges.join('L')}Z`;
}

export function dragonFrame({ route, snake, growth, progress }) {
  const headOffset = 1.5 - progress;
  const neckOffset = headOffset + 0.64;
  const tailOffset = headOffset + snake.length - 1 - growth * (1 - progress);
  const head = poseAt(route, neckOffset);
  const neckRadius = 0.257;
  const neck = { ...head, x: head.x + 0.045 * head.dx, y: head.y + 0.045 * head.dy, radius: neckRadius };
  const points = [neck];
  const bands = [];

  const bandLength = 0.78;
  const bandCount = Math.ceil((tailOffset - neckOffset) / bandLength);
  for (let i = 0; i < bandCount; i++) {
    const start = neckOffset + i * bandLength;
    const end = Math.min(start + bandLength, tailOffset);
    const divisions = Math.ceil((end - start) / 0.16);
    const band = [];
    for (let j = 0; j <= divisions; j++) {
      const offset = start + (end - start) * j / divisions;
      const radius = neckRadius * Math.sin(Math.min(1, (tailOffset - offset) / 1.15) * Math.PI / 2);
      band.push({ ...poseAt(route, offset), radius });
    }
    points.push(...band.slice(i ? 1 : 0));
    if (i % 2) bands.push(ribbon(band, 0, 1));
  }

  return {
    body: ribbon(points, -1, 1),
    belly: ribbon(points, 0, 1),
    bands: bands.join(''),
    head: `translate(${head.x} ${head.y}) rotate(${Math.atan2(head.dy, head.dx) * 180 / Math.PI})`,
  };
}
