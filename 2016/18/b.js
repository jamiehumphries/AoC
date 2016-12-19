var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var length = 400000;
  var safeTiles = input.match(/\./g).length;
  var previousRow = input;
  for (var i = 1; i < length; i++) {
    var currentRow = '';
    for (var j = 0; j < previousRow.length; j++) {
      var left = previousRow[j - 1] || '.';
      var right = previousRow[j + 1] || '.';
      if (left === right) {
        safeTiles++;
        currentRow += '.';
      } else {
        currentRow += '^';
      }
    }
    previousRow = currentRow;
  }
  return safeTiles;
}
