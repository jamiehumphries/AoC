var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

position = (disc, time) => (disc.start + disc.number + time) % disc.positions;

run = input => {
  var pattern = /Disc #\d+ has (\d+) positions; at time=0, it is at position (\d+)/
  var lines = input.split('\n');
  var discs = lines.map((line, i) => {
    var match = line.match(pattern);
    return { number: i + 1, positions: parseInt(match[1]), start: parseInt(match[2]) };
  });
  var t = 0;
  while (++t) {
    var outOfPosition = discs.filter(d => position(d, t));
    if (outOfPosition.length === 0) {
      return t;
    }
    if (t % 10000 === 0) {
      console.log(t + 's');
    }
  }
}
