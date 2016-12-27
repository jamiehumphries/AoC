var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

viable = (a, b) => {
  // also not same
  return a.used !== 0 && b.avail >= a.used;
}

run = input => {
  var lines = input.split('\n');
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

  var maxX = Math.max(...nodes.map(n => n.x));
  var maxY = Math.max(...nodes.map(n => n.y));

  var grid = new Array(maxY + 1).fill().map(() => new Array(maxX + 1).fill(0));
  nodes.forEach(node => {
    var symbol = node.used === 0 ? ' ' : node.used < 100 ? '•' : '█';
    grid[node.y][node.x] = symbol;
  });
  grid[0][maxX] = 'G';

  var cols = new Array(maxX + 1).fill().map((_, i) => (i < 10 ? '0' + i : i));
  console.log('   ' + cols.map(c => Math.floor(c / 10)).join(' '));
  console.log('   ' + cols.map(c => c % 10).join(' '));
  grid.forEach((row, i) => console.log((i < 10 ? '0' + i : i) + ' ' + row.join(' ')));

  // Manually calculate.
}
