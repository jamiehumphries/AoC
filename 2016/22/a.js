var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

viable = (a, b) => {
  // also not same
  return a.used !== 0 && b.avail >= a.used;
}

run = input => {
  var lines = input.split('\n');
  lines.splice(0, 2); // Remove junk lines.
  const NODE_PATTERN = /\/dev\/grid\/node-x(\d+)-y(\d+)\s+(\d+)T\s+(\d+)T\s+(\d+)T\s+(\d+)%/
  nodes = lines.map(line => {
    var match = line.match(NODE_PATTERN);
    return {
      x: parseInt(match[1]),
      y: parseInt(match[2]),
      size: parseInt(match[3]),
      used: parseInt(match[4]),
      avail: parseInt(match[5]),
      use: parseInt(match[6])
    }
  });

  var viablePairs = 0;
  for (var a = 0; a < nodes.length; a++) {
    for (var b = a + 1; b < nodes.length; b++) {
      var nodeA = nodes[a];
      var nodeB = nodes[b];
      if (viable(nodeA, nodeB)) {
        viablePairs++;
      }
      if (viable(nodeB, nodeA)) {
        viablePairs++;
      }
    }
  }

  return viablePairs;
}
