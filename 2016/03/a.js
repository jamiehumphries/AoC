var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var triangles = input.split('\n').map(line => line.trim().split(/\s+/).map(x => parseInt(x)));
  var possible = triangles.filter(tri => tri.reduce((a, b) => a + b, 0) > 2 * Math.max(...tri));
  return possible.length;
}
