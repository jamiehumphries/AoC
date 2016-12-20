var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

const maxIP = 4294967295;
run = input => {
  var ranges = input.split('\n')
    .map(line => line.match(/(\d+)-(\d+)/))
    .map(match => { return { min: parseInt(match[1]), max: parseInt(match[2]) } });
  ranges.sort((a, b) => a.min - b.min);
  var maxBlocked = -1;
  var allowed = 0;
  for (var i = 0; i < ranges.length; i++) {
    var range = ranges[i];
    if (range.min > maxBlocked + 1) {
      allowed += range.min - (maxBlocked + 1);
    }
    maxBlocked = Math.max(maxBlocked, range.max);
  }
  allowed += maxIP - maxBlocked;
  return allowed;
}
