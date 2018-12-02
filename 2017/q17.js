const steps = 312;

let state = [0];
let currentPosition = 0;
let after0 = null;

const spins = 50000000;
for (let i = 1; i <= spins; i++) {
  const length = i;
  currentPosition = (currentPosition + steps) % length;
  // state.splice(currentPosition + 1, 0, i);
  if (currentPosition === 0) {
    after0 = i;
  }
  currentPosition++;
}

const result1 = state[(state.indexOf(2017) + 1) % state.length];
result1;
const result2 = after0;
spins;
result2;
