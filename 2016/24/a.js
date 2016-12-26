var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

var cols, rows, grid, paths;

path = (x, y) => {
  var steps = {};
  steps[x] = 0;
  var zs = [x];
  while (true) {
    var z = zs.shift();
    var step = steps[z];
    if (z == y) {
      return step;
    }
    var nextZs = [z - 1, z + 1, z - cols, z + cols].forEach(nextZ => {
      if (grid[nextZ] !== undefined && grid[nextZ] !== '#' && steps[nextZ] === undefined) {
        zs.push(nextZ);
        steps[nextZ] = step + 1;
      }
    });
  }
}

permutations = arr => {
  if (arr.length === 0) {
    return [[]];
  }
  return [].concat(...arr.map((_, i) => {
    var copy = arr.concat();
    var tail = copy.splice(i, 1);
    return permutations(copy).map(p => p.concat(tail));
  }));
}

distance = route => {
  var prev = 0;
  var dist = 0;
  route.forEach(next => {
    dist += paths[prev][next];
    prev = next;
  });
  return dist;
}

run = input => {
  var lines = input.split('\n');
  cols = lines[0].length;
  rows = lines.length;

  grid = lines.join('');
  var max = Math.max(...grid.split('').map(x => parseInt(x) || 0));
  var positions = new Array(max + 1).fill().map((_, i) => grid.indexOf(i));

  paths = new Array(max + 1).fill().map((_, i) => new Array(max + 1).fill(0));
  for (var x = 0; x < paths.length; x++) {
    for (var y = 0; y < paths.length; y++) {
      paths[x][y] = paths[y][x] = path(positions[x], positions[y]);
    }
  }

  var routes = permutations(new Array(max).fill().map((_, i) => i + 1));
  return Math.min(...routes.map(r => distance(r)));
}
