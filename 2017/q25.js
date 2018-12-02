const left = -1;
const right = 1;

const states = {
  A: [
    { value: 1, direction: right, next: 'B' },
    { value: 0, direction: left, next: 'C' }
  ],
  B: [
    { value: 1, direction: left, next: 'A' },
    { value: 1, direction: right, next: 'D' }
  ],
  C: [
    { value: 0, direction: left, next: 'B' },
    { value: 0, direction: left, next: 'E' }
  ],
  D: [
    { value: 1, direction: right, next: 'A' },
    { value: 0, direction: right, next: 'B' }
  ],
  E: [
    { value: 1, direction: left, next: 'F' },
    { value: 1, direction: left, next: 'C' }
  ],
  F: [
    { value: 1, direction: right, next: 'D' },
    { value: 1, direction: right, next: 'A' }
  ]
}

let tape = {};
let cursor = 0;
let state = states['A'];

function read() {
  return tape[cursor] || 0;
}

function write(value){
  tape[cursor] = value;
}

const steps = 12667664;
let step = 0;
while (step++ < steps) {
  const { value, direction, next } = state[read()];
  write(value);
  cursor += direction;
  state = states[next];
}
const result1 = Object.values(tape).filter(v => v === 1).length;
result1;
