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
  var newDisc = { number: lines.length + 1, positions: 11, start: 0 };
  var t = 203660; // From part (a)
  var lcm = discs.reduce((prod, discs) => prod * discs.positions, 1);
  while (true) {
    if (position(newDisc, t) === 0) {
      return t;
    }
    t += lcm;
  }
}
