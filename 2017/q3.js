const input = 265149;
const sqrt = Math.floor(Math.sqrt(input - 1));
const oddSqrt = sqrt % 2 === 1 ? sqrt : sqrt - 1;
const layerSteps = Math.floor(oddSqrt / 2) + 1;
const oddSquare = oddSqrt * oddSqrt;

const stepsFromCorner = (input - oddSquare) % (oddSqrt + 1);
const edgeMiddle = (oddSqrt + 1) / 2;
const stepsFromEdgeMiddle = Math.abs(stepsFromCorner - edgeMiddle);

const result1 = layerSteps + stepsFromEdgeMiddle;
result1;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    return new Point(this.x + point.x, this.y + point.y);
  }

  pointOnLeft(direction) {
    const leftDirection = direction.rotate();
    return this.add(leftDirection);
  }

  rotate() {
    return new Point(-this.y, this.x);
  }

  neighbours() {
    const directions = [
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, -1]
    ]
    return directions.map(dir => this.add(new Point(dir[0], dir[1])));
  }

  toString() {
    return `${this.x},${this.y}`;
  }

  static parse(s) {
    const [x, y] = s.split(',').map(n => parseInt(n));
    return new Point(x, y);
  }
}

const spiral = {
  '0,0': 1
};
let current = new Point(0, 0);
let direction = new Point(0, -1);

let result2 = 0;
while (result2 < input) {
  const pointOnLeft = current.pointOnLeft(direction);
  if (!spiral[pointOnLeft.toString()]) {
    direction = direction.rotate();
  }
  current = current.add(direction);
  const sum = current.neighbours().reduce((total, n) => total + (spiral[n.toString()] || 0), 0);
  result2 = spiral[current.toString()] = sum;
}

result2;