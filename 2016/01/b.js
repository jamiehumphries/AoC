var fs = require('fs');
fs.readFile('./input.txt', 'utf8', (err, input) => console.log(run(input)));

var dir;
var pos;
var positions;

R = () => dir = [dir[1], -dir[0]];
L = () => dir = [-dir[1], dir[0]];

away = () => Math.abs(pos[0]) + Math.abs(pos[1]);

run = input => {
  var instructions = input.split(', ');
  dir = [0, 1];
  pos = [0, 0];
  positions = [];

  for (var i = 0; i < instructions.length; i++) {
    var inst = instructions[i];
    eval(inst[0] + '()');
    var dist = parseInt(inst.substring(1));
    for (var d = 0; d < dist; d++) {
      pos[0] += dir[0];
      pos[1] += dir[1];
      posKey = pos.toString();
      if (positions.indexOf(posKey) !== -1) {
        return away();
      }
      positions.push(posKey);
    }
  }
}