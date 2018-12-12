let input = `#.#.. => .
..##. => .
...#. => .
..#.. => .
##### => #
.#.#. => .
####. => .
###.. => .
.#..# => #
#..#. => #
#.#.# => .
#...# => #
..### => .
...## => #
##..# => #
#.... => .
.#.## => #
#.### => #
.##.# => #
#..## => .
.#... => #
.###. => .
##... => #
##.## => #
##.#. => #
#.##. => #
.##.. => .
..#.# => .
....# => .
###.# => .
..... => .
.#### => .`;

let state = '##.#....#..#......#..######..#.####.....#......##.##.##...#..#....#.#.##..##.##.#.#..#.#....#.#..#.#';
let firstPot = 0;

const rules = {};
input.split('\n').forEach(line => {
  rules[line.substr(0, 5)] = line[line.length - 1];
});

function spread() {
  state = '....' + state + '....';
  let newState = '';
  for (let i = 2; i < state.length - 2; i++) {
    const key = state.substr(i - 2, 5);
    newState += rules[key] || '.';
  }
  firstPot += newState.indexOf('#') - 2;
  state = newState.replace(/^\.*|\.*$/g, '');
}

const totalGenerations = 50000000000;

let generation = 0;
let stableShift;
while (generation++ < totalGenerations) {
  const previousFirstPot = firstPot;
  const previousState = state;
  spread();
  if (state === previousState) {
    const filledPots = state.match(/#/g).length;
    stableShift = (firstPot - previousFirstPot) * filledPots;
    break;
  }
}

const potSum = state.split('').reduce((sum, value, i) => sum += value === '#' ? i + firstPot : 0, 0);

console.log(state);
if (stableShift) {
  console.log(potSum + (totalGenerations - generation) * stableShift);
} else {
  console.log(potSum);
}
