let input = `158, 163
287, 68
76, 102
84, 244
162, 55
272, 335
345, 358
210, 211
343, 206
219, 323
260, 238
83, 94
137, 340
244, 172
335, 307
52, 135
312, 109
276, 93
288, 274
173, 211
125, 236
200, 217
339, 56
286, 134
310, 192
169, 192
313, 106
331, 186
40, 236
194, 122
244, 76
159, 282
161, 176
262, 279
184, 93
337, 284
346, 342
283, 90
279, 162
112, 244
49, 254
63, 176
268, 145
334, 336
278, 176
353, 135
282, 312
96, 85
90, 105
354, 312`;

const safeDistance = 10000;

let points = input.split('\n').map(line => line.split(',').map(n => parseInt(n)));
const is = () => points.map(pt => pt[0]);
const js = () => points.map(pt => pt[1]);
const minI = Math.min(...is());
const minJ = Math.min(...js());

points = points.map(pt => [pt[0] - minI, pt[1] - minJ]);
const maxI = Math.max(...is());
const maxJ = Math.max(...js());

const proximityGrid = {};
let safeRegion = 0;

for (let i = 0; i <= maxI; i++) {
  for (let j = 0; j <= maxJ; j++) {
    const distances = points.map((pt, id) => {
      return { id, distance: Math.abs(pt[0] - i) + Math.abs(pt[1] - j) };
    });
    const totalDistance = distances.reduce((total, value) => total + value.distance, 0);
    if (totalDistance < safeDistance) {
      safeRegion++;
    }
    const minimumDistance = Math.min(...distances.map(d => d.distance));
    const nearestPoints = distances.filter(d => d.distance === minimumDistance);
    proximityGrid[[i, j]] = nearestPoints.length === 1 ? nearestPoints[0].id : undefined;
  }
}
safeRegion;

const infiniteRegions = new Set();
for (let i = 0; i <= maxI; i++) {
  infiniteRegions.add(proximityGrid[[i, 0]]);
  infiniteRegions.add(proximityGrid[[i, maxJ]]);
}
for (let j = 0; j <= maxJ; j++) {
  infiniteRegions.add(proximityGrid[[0, j]]);
  infiniteRegions.add(proximityGrid[[maxI, j]]);
}

const regionSizes = [...points.keys()].fill(0);
Object.values(proximityGrid).forEach(point => {
  if (point === undefined || infiniteRegions.has(point)) {
    return;
  }
  regionSizes[point]++;
});

console.log(Math.max(...regionSizes));
