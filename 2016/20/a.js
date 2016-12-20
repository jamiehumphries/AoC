var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var ranges = input.split('\n')
    .map(line => line.match(/(\d+)-(\d+)/))
    .map(match => { return { min: parseInt(match[1]), max: parseInt(match[2]) } });
  ranges.sort((a, b) => a.min - b.min);
  var maxBlocked = -1;
  for (var i = 0; i < ranges.length; i++) {
    var range = ranges[i];
    if (range.min > maxBlocked + 1) {
      return maxBlocked + 1;
    }
    maxBlocked = Math.max(maxBlocked, range.max);
  }
  return maxBlocked + 1;
}
