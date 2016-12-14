// ** INITIAL **
// A = promethium
// B = cobalt
// C = curium
// D = ruthenium
// E = plutonium
var floors = [
  ['AG', 'AM', 'FG', 'FM', 'GG', 'GM'],
  ['BG', 'CG', 'DG', 'EG'],
  ['BM', 'CM', 'DM', 'EM'],
  []
];

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
stringify = (floors, elevator) => {
  var transform = [];
  var newFloors = [];
  floors.forEach(floor => {
    var newFloor = [];
    floor.forEach(c => {
      var element = c[0];
      var type = c[1];
      if (transform.indexOf(element) === -1) {
        transform.push(element);
      }
      newFloor.push(letters[transform.indexOf(element)] + type);
    });
    newFloor.sort();
    newFloors.push(newFloor);
  });
  return JSON.stringify({ elevator: elevator, floors: newFloors });
}

parse = state => JSON.parse(state);

safeFloor = floor => {
  if (floor.find(c => c.endsWith('G')) === undefined) {
    return true;
  }
  return floor.filter(c => c.endsWith('M'))
    .filter(m => floor.indexOf(m[0] + 'G') === -1)
    .length === 0;
}

safe = floors => floors.find(f => !safeFloor(f)) === undefined;

clone = floors => floors.map(f => f.concat());

var states = {};
var initialState = stringify(floors, 0);
var targetState = stringify([[], [], [], [].concat(...floors)], 3);

states[initialState] = { step: 0, handled: false };

getNextTrialStateKey = () => {
  return Object.getOwnPropertyNames(states)
    .filter(s => !states[s].handled)
    .sort((s1, s2) => states[s1].step - states[s2].step)[0];
}

move = (floors, components, from, delta) => {
  floors = clone(floors);
  var to = from + delta;
  if (!floors[to]) {
    return;
  }
  for (var i = 0; i < floors.length; i++) {
    if (i === from) {
      floors[i] = floors[i].filter(c => components.indexOf(c) === -1);
    } else if (i === to) {
      floors[i] = floors[i].concat(components);
    }
  }
  return { floors: floors, elevator: to };
}

moveUp = (floors, components, from) => move(floors, components, from, 1);
moveDown = (floors, components, from) => move(floors, components, from, -1);

makeMoves = state => {
  var floors = clone(state.floors);
  var elevator = state.elevator;
  var floor = floors[elevator];
  var newStates = [];
  for (var x = 0; x < floor.length; x++) {
    for (var y = x + 1; y <= floor.length; y++) {
      var components = [floor[x], floor[y]].filter(c => c);
      var up = moveUp(floors, components, elevator);
      var down = moveDown(floors, components, elevator);
      [up, down].forEach(s => {
        if (s && safe(s.floors)) {
          newStates.push(s);
        }
      });
    }
  }
  return newStates;
}

record = (state, step) => {
  var stateKey = stringify(state.floors, state.elevator);
  if (states[stateKey] === undefined) {
    states[stateKey] = { step: step, handled: false };
  }
}

var maxStep = 0;

while (states[targetState] === undefined) {
  var trialStateKey = getNextTrialStateKey();
  var trialState = parse(trialStateKey);
  var step = states[trialStateKey].step;
  if (step > maxStep) {
    maxStep = step;
    console.log(maxStep);
  }
  var nextStep = step + 1;
  var nextStates = makeMoves(trialState);
  nextStates.forEach(state => record(state, nextStep));
  states[trialStateKey].handled = true;
}

console.log(states[targetState].step);