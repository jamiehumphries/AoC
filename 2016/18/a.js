var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var length = 40;
  var rows = [input];
  console.log(input);
  for (var i = 1; i < length; i++) {
    var previousRow = rows[i - 1];
    var currentRow = '';
    for (var j = 0; j < previousRow.length; j++) {
      var left = previousRow[j - 1] || '.';
      var right = previousRow[j + 1] || '.';
      currentRow += left === right ? '.' : '^';
    }
    rows.push(currentRow);
    console.log(currentRow);
  }
  return rows.join('').match(/\./g).length;
}
