var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var points = input.split('\n').map(line => line.trim().split(/\s+/).map(x => parseInt(x)));

  var triangles = [];
  for (var i = 0; i < points.length; i += 3) {
    for (var j = 0; j < 3; j++) {
      triangles.push([points[i][j], points[i + 1][j], points[i + 2][j]]);
    }
  }

  var possible = triangles.filter(tri => tri.reduce((a, b) => a + b, 0) > 2 * Math.max(...tri));
  return possible.length;
}
