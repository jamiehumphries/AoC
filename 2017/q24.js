const input = `42/37
28/28
29/25
45/8
35/23
49/20
44/4
15/33
14/19
31/44
39/14
25/17
34/34
38/42
8/42
15/28
0/7
49/12
18/36
45/45
28/7
30/43
23/41
0/35
18/9
3/31
20/31
10/40
0/22
1/23
20/47
38/36
15/8
34/32
30/30
30/44
19/28
46/15
34/50
40/20
27/39
3/14
43/45
50/42
1/33
6/39
46/44
22/35
15/20
43/31
23/23
19/27
47/15
43/43
25/36
26/38
1/10`;

const all = input.split('\n').map(line => {
  const [a, b] = line.split('/').map(n => parseInt(n));
  return { a, b, strength: a + b };
});

function flatMap(arr, func) {
  return arr.reduce((acc, val) => acc.concat(func(val)), []);
}

function getStrengths(start, components, currentStrength) {
  currentStrength = currentStrength || 0;
  const matches = components.filter(component => component.a === start || component.b === start);
  return flatMap(matches, component => {
    const end = component.a === start ? component.b : component.a;
    const remaining = components.filter(otherComponent =>  otherComponent !== component);
    const strength = component.a + component.b + currentStrength;
    return [strength].concat(getStrengths(end, remaining, strength));
  });
}

function getNextBridges(currentBridge) {
  const matches = all.filter(component => {
    if (currentBridge.components.indexOf(component) !== -1) {
      return false;
    }
    return component.a === currentBridge.end || component.b === currentBridge.end;
  });
  return matches.map(component => {
    const components = currentBridge.components.concat([component]);
    const end = component.a === currentBridge.end ? component.b : component.a;
    const strength = currentBridge.strength + component.a + component.b;
    return { components, end, strength };
  });
}

const initialBridge = { components: [], end: 0, strength: 0 };

let length = 0;
let bridges = [initialBridge];
let overallMax = 0;
let maxOfLength = 0;
while (length++ < all.length) {
  maxOfLength = Math.max(...bridges.map(bridge => bridge.strength));
  if (maxOfLength > overallMax) {
    overallMax = maxOfLength;
  }
  const nextBridges = flatMap(bridges, getNextBridges);
  if (nextBridges.length === 0) {
    break;
  }
  bridges = nextBridges;
}

overallMax;
maxOfLength;
