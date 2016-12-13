var n = 1358;

wall = (x, y) => {
  var num = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + n;
  var bin = num.toString(2);
  return bin.split('').filter(x => parseInt(x)).length % 2 === 1;
}

var size = 50;
var distances = new Array(size * size).fill(Infinity);
var done = new Array(size * size).fill(false);

i = (x, y) => x + (y * size);
xy = i => { return { x: i % size, y: Math.floor(i / size) } }

distances[i(1, 1)] = 0;

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if (wall(x, y)) {
      distances[i(x, y)] = -1;
      done[i(x, y)] = true;
    }
  }
}

minimum = () => Math.min(...distances.filter((d, idx) => !done[idx]));
trySet = (x, y, dist) => {
  if(x < 0 || x >= size || y < 0 || y >= size) {
    return;
  }
  distances[i(x, y)] = Math.min(distances[i(x, y)], dist);
}

var min;
while ((min = minimum()) < 50) {
  var minI;
  for (var idx = 0; idx < distances.length; idx++) {
    if (!done[idx] && distances[idx] === min) {
      minI = idx;
      break;
    }
  }
  var minXY = xy(minI);
  var minX = minXY.x;
  var minY = minXY.y;
  trySet(minX, minY - 1, min + 1);
  trySet(minX, minY + 1, min + 1);
  trySet(minX - 1, minY, min + 1);
  trySet(minX + 1, minY, min + 1);
  done[minI] = true;
}

console.log(distances.filter(d => (0 <= d) && (d <= 50)).length);