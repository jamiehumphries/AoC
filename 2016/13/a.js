var n = 1358;
var tX = 31;
var tY = 39;

wall = (x, y) => {
  var num = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + n;
  var bin = num.toString(2);
  return bin.split('').filter(x => parseInt(x)).length % 2 === 1;
}

var size = 50;
for (var y = 0; y < size; y++) {
  var row = '';
  for (var x = 0; x < size; x++) {
    if ((x === 1 && y === 1) || (x === tX && y === tY)) {
      row += 'X';
    } else {
      row += wall(x, y) ? '█' : '•';
    }
  }
  console.log(row);
}

// Manually count!