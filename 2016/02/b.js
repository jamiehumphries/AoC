var fs = require('fs');
fs.readFile('./input.txt', 'utf8', (err, input) => console.log(run(input)));

var keyPad = [
  ' ', ' ', '1', ' ', ' ',
  ' ', '2', '3', '4', ' ',
  '5', '6', '7', '8', '9',
  ' ', 'A', 'B', 'C', ' ',
  ' ', ' ', 'D', ' ', ' '
];

gridSize = 5;

dirs = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] };

contain = num => Math.min(Math.max(num, 0), gridSize - 1);

move = (from, dir) => {
  var i = keyPad.indexOf(from);
  var fromXY = [i % gridSize, Math.floor(i / gridSize)]
  var dirXY = dirs[dir];
  var toXY = [contain(fromXY[0] + dirXY[0]), contain(fromXY[1] + dirXY[1])];
  var to = keyPad[toXY[1] * gridSize + toXY[0]];
  return to === ' ' ? from : to;
}

getCode = (from, inst) => {
  inst.split('').forEach(dir => from = move(from, dir));
  return from;
}

run = input => {
  var instructions = input.split('\n');
  var code = '';
  var key = '5';
  instructions.forEach(inst => code += key = getCode(key, inst));
  return code;
}
