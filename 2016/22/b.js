var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

viable = (a, b) => {
  // also not same
  return a.used !== 0 && b.avail >= a.used;
}

state = (grid, goalX, goalY) => `${[].concat(...grid).map(node => node.avail).join()}:${goalX},${goalY}`;

run = input => {
  var lines = input.split('\n');
  lines.splice(0, 2); // Remove junk lines.
  const NODE_PATTERN = /\/dev\/grid\/node-x(\d+)-y(\d+)\s+\d+T\s+(\d+)T\s+(\d+)T\s+\d+%/
  nodes = lines.map(line => {
    var match = line.match(NODE_PATTERN);
    return {
      x: parseInt(match[1]),
      y: parseInt(match[2]),
      used: parseInt(match[3]),
      avail: parseInt(match[4])
    }
  });

  var maxX = 29;
  var maxY = 34;
  var grid = new Array(maxX + 1).fill(null).map(() => new Array(maxY + 1).fill(null));
  nodes.forEach(node => grid[node.x][node.y] = { used: node.used, avail: node.avail });

  return state(grid, 5, 3);   

  var viablePairs = [];
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
