const input = `0: 3
1: 2
2: 9
4: 4
6: 4
8: 6
10: 6
12: 8
14: 5
16: 6
18: 8
20: 8
22: 8
24: 6
26: 12
28: 12
30: 8
32: 10
34: 12
36: 12
38: 10
40: 12
42: 12
44: 12
46: 12
48: 14
50: 14
52: 8
54: 12
56: 14
58: 14
60: 14
64: 14
66: 14
68: 14
70: 14
72: 14
74: 12
76: 18
78: 14
80: 14
86: 18
88: 18
94: 20
98: 18`;

const lines = input.split('\n');
const layers = {};
lines.forEach(line => {
  const match = line.match(/(\d+): (\d+)/);
  const depth = parseInt(match[1]);
  const range = parseInt(match[2]);
  layers[depth] = range;
});

const maxDepth = Math.max(...Object.keys(layers));

function getSeverity(delay, breakWhenCaught) {
  let severity = 0;
  let caught = false;
  for (let depth = 0; depth <= maxDepth; depth++) {
    const range = layers[depth];
    if (!range) {
      continue;
    }
    const fullSweep = range * 2 - 2;
    if ((depth + delay) % fullSweep === 0) {
      severity += depth * range;
      caught = true;
      if (breakWhenCaught) {
        break;
      }
    }
  }
  return { severity, caught };
}

const { severity: result1 } = getSeverity(0);
result1;

let delay = 0;
while (getSeverity(delay, true).caught) {
  delay++;
}
const result2 = delay;
result2;
