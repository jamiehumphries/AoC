let input = `Step S must be finished before step V can begin.
Step J must be finished before step T can begin.
Step N must be finished before step Q can begin.
Step O must be finished before step H can begin.
Step I must be finished before step C can begin.
Step Y must be finished before step R can begin.
Step K must be finished before step B can begin.
Step A must be finished before step C can begin.
Step B must be finished before step D can begin.
Step W must be finished before step T can begin.
Step E must be finished before step V can begin.
Step Q must be finished before step L can begin.
Step U must be finished before step P can begin.
Step R must be finished before step C can begin.
Step V must be finished before step M can begin.
Step X must be finished before step P can begin.
Step G must be finished before step T can begin.
Step T must be finished before step Z can begin.
Step Z must be finished before step M can begin.
Step F must be finished before step C can begin.
Step M must be finished before step L can begin.
Step D must be finished before step C can begin.
Step H must be finished before step L can begin.
Step L must be finished before step P can begin.
Step P must be finished before step C can begin.
Step S must be finished before step Q can begin.
Step M must be finished before step P can begin.
Step S must be finished before step T can begin.
Step U must be finished before step T can begin.
Step X must be finished before step H can begin.
Step Q must be finished before step G can begin.
Step Y must be finished before step U can begin.
Step H must be finished before step C can begin.
Step O must be finished before step F can begin.
Step S must be finished before step P can begin.
Step B must be finished before step E can begin.
Step S must be finished before step D can begin.
Step R must be finished before step X can begin.
Step Z must be finished before step D can begin.
Step J must be finished before step C can begin.
Step Z must be finished before step F can begin.
Step K must be finished before step T can begin.
Step T must be finished before step H can begin.
Step E must be finished before step H can begin.
Step D must be finished before step L can begin.
Step O must be finished before step A can begin.
Step V must be finished before step T can begin.
Step V must be finished before step X can begin.
Step Q must be finished before step X can begin.
Step O must be finished before step K can begin.
Step L must be finished before step C can begin.
Step W must be finished before step H can begin.
Step I must be finished before step T can begin.
Step M must be finished before step H can begin.
Step V must be finished before step G can begin.
Step K must be finished before step P can begin.
Step E must be finished before step X can begin.
Step V must be finished before step C can begin.
Step Y must be finished before step W can begin.
Step J must be finished before step G can begin.
Step B must be finished before step C can begin.
Step B must be finished before step Z can begin.
Step K must be finished before step R can begin.
Step Y must be finished before step V can begin.
Step X must be finished before step G can begin.
Step J must be finished before step K can begin.
Step A must be finished before step M can begin.
Step T must be finished before step M can begin.
Step W must be finished before step D can begin.
Step G must be finished before step F can begin.
Step A must be finished before step B can begin.
Step W must be finished before step F can begin.
Step Y must be finished before step P can begin.
Step B must be finished before step V can begin.
Step N must be finished before step G can begin.
Step J must be finished before step H can begin.
Step S must be finished before step L can begin.
Step A must be finished before step R can begin.
Step X must be finished before step D can begin.
Step Y must be finished before step M can begin.
Step H must be finished before step P can begin.
Step F must be finished before step D can begin.
Step S must be finished before step G can begin.
Step K must be finished before step C can begin.
Step W must be finished before step Z can begin.
Step A must be finished before step Z can begin.
Step O must be finished before step Y can begin.
Step U must be finished before step C can begin.
Step X must be finished before step M can begin.
Step Y must be finished before step A can begin.
Step F must be finished before step P can begin.
Step J must be finished before step Y can begin.
Step R must be finished before step G can begin.
Step Y must be finished before step Q can begin.
Step D must be finished before step P can begin.
Step O must be finished before step U can begin.
Step O must be finished before step I can begin.
Step E must be finished before step L can begin.
Step G must be finished before step Z can begin.
Step T must be finished before step F can begin.
Step Q must be finished before step F can begin.`;

const steps = {};
input.split('\n').forEach(line => {
  const match = line.match(/Step (\w) must be finished before step (\w) can begin\./);
  const step = match[2];
  const dependency = match[1];
  if (steps[step] === undefined) {
    steps[step] = [];
  }
  steps[step].push(dependency);
});

const order = [];
const todo = new Set(Object.keys(steps).concat(...Object.values(steps)));
const inProgress = {};
const done = new Set();

function isReady(step) {
  const dependencies = steps[step] || [];
  for (let dependency of dependencies) {
    if (!done.has(dependency)) {
      return false;
    }
  }
  return true;
}

let availableWorkers = 5;
const baseTime = 60;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let time = -1;
while (todo.size > 0 || Object.keys(inProgress).length > 0) {
  time++;
  Object.keys(inProgress).forEach(step => {
    inProgress[step]--;
    if (inProgress[step] === 0) {
      delete inProgress[step];
      availableWorkers++;
      done.add(step);
      order.push(step);
    }
  });
  const readyNext = Array.from(todo).filter(isReady).sort();
  while (availableWorkers > 0) {
    const step = readyNext.shift();
    if (!step) {
      break;
    }
    inProgress[step] = alphabet.indexOf(step) + baseTime + 1;
    availableWorkers--;
    todo.delete(step);
  }
}
console.log(order.join(''));
console.log(time);
