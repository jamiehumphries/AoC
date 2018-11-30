const input = '10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6';
const banks = input.split('\t').map(n => parseInt(n));

function currentState() {
  return banks.join('_');
}

const states = {};
let step = 0;
while (!states[currentState()]) {
  step++;
  states[currentState()] = step;
  const mostBlocks = Math.max(...banks);
  const bankToRedistribute = banks.indexOf(mostBlocks);
  banks[bankToRedistribute] = 0;
  for (let i = 1; i <= mostBlocks; i++) {
    banks[(bankToRedistribute + i) % banks.length]++;
  }
}

const result1 = Object.keys(states).length;
result1;

const result2 = step - states[currentState()] + 1;
result2;
