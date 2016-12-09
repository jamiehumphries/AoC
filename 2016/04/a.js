var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

getChecksum = room => {
  var counts = {};
  for (var i = 0; i < room.length; i++) {
    var letter = room[i];
    if (letter === '-') continue;
    counts[letter] = (counts[letter] || 0) + 1;
  }
  counts = Object.getOwnPropertyNames(counts)
    .map(prop => { return { letter: prop, freq: counts[prop] } });
  counts.sort((x, y) => (y.freq - x.freq) || (x.letter < y.letter ? -1 : 1));
  return counts.map(c => c.letter).join('').substring(0, 5);
}

run = input => {
  var lines = input.split('\n');
  var rooms = lines.map(l => l.match(/([a-z-]+)-(\d+)\[([a-z]+)\]/))
    .map(m => { return { name: m[1], id: parseInt(m[2]), checksum: m[3] } });
  var real = rooms.filter(r => getChecksum(r.name) === r.checksum);
  return real.reduce((sum, room) => sum + room.id, 0);
}
