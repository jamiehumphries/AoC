const input = `.#.....##..##..###.###..#
..##..######.#.###.##.#.#
###..#..#####.##.##.#...#
###......##..###.#...#.#.
.#.###.##..#.####.#..#...
..#.#.#####...##.####.###
..#..#.#..###.#..###.###.
#########...#....##..#.#.
.###..#######..####...###
#####...#..##...###..##..
..#......##.#....#...####
.##.#..#####.#####.##.##.
####.##.###.#..#.#.#.....
#....##.####.#.#..#.#.##.
###...##...#.###.#.#.####
.#.#...#.#.##.##....##.#.
#..##.#.#..#....###..####
#####...#..#.###...##.###
##.#..####.###...#....###
###.#####.....#....#.##..
####.##.....######.#..#.#
.#.....####.##...###..##.
....########.#..###.#..##
##.##..#...#...##.#....##
.#.######.##....####.#.##`;

const lines = input.split('\n');
const state = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    state[[i,j]] = lines[i][j];
  }
}

let currentNode = [(lines.length - 1) / 2, (lines[0].length - 1) / 2];
let direction = [-1, 0];
let infections = 0;

function turnLeft() {
  direction = [-direction[1], direction[0]];
}

function turnRight() {
  direction = [direction[1], -direction[0]];
}

function reverse() {
  direction = [-direction[0], -direction[1]];
}

function clean() {
  state[currentNode] = '.';
}

function infect() {
  state[currentNode] = '#';
  infections++;
}

function weaken() {
  state[currentNode] = 'W';
}

function flag() {
  state[currentNode] = 'F';
}

function getState() {
  return state[currentNode] || '.';
}

function forward() {
  currentNode = [currentNode[0] + direction[0], currentNode[1] + direction[1]];
}

const totalBursts = 10000000;
let burst = 0;
while (burst++ < totalBursts) {
  const currentState = getState();
  if (currentState === '.') {
    turnLeft();
    weaken();
  } else if (currentState === 'W') {
    infect();
  } else if (currentState === '#') {
    turnRight();
    flag();
  } else if (currentState === 'F') {
    reverse();
    clean();
  }
  forward();
}

infections;
