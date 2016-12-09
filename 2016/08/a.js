var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var instructions = input.split('\n');
  var width = 50;
  var height = 6;
  var screen = Array(width).fill(0).map(x => Array(height).fill(0));

  for (var i = 0; i < instructions.length; i++) {
    var instruction = instructions[i];

    if (instruction.startsWith('rect')) {
      var match = instruction.match(/rect (\d+)x(\d+)/);
      var w = parseInt(match[1]);
      var h = parseInt(match[2]);
      for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
          screen[x][y] = 1;
        }
      }
    } else if (instruction.startsWith('rotate row')) {
      var match = instruction.match(/rotate row y=(\d+) by (\d+)/);
      var y = parseInt(match[1]);
      var by = parseInt(match[2]);
      var newScreen = screen.map(col => col.concat());
      for (x = 0; x < width; x++) {
        newScreen[(x + by) % width][y] = screen[x][y];
      }
      screen = newScreen;
    } else if (instruction.startsWith('rotate column')) {
      var match = instruction.match(/rotate column x=(\d+) by (\d+)/);
      var x = parseInt(match[1]);
      var by = parseInt(match[2]);
      var newScreen = screen.map(col => col.concat());
      for (y = 0; y < height; y++) {
        newScreen[x][(y + by) % height] = screen[x][y];
      }
      screen = newScreen;
    }
  }

  return [].concat(...screen).filter(cell => cell).length;
}
