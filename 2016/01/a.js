var fs = require('fs');
fs.readFile('./input.txt', 'utf8', (err, input) => console.log(run(input)));

var dir;
var pos;

R = dist => {
  dir = [dir[1], -dir[0]];
  forward(dist);
}

L = dist => {
  dir = [-dir[1], dir[0]];
  forward(dist);
}

forward = dist => {
  pos[0] += dir[0] * dist;
  pos[1] += dir[1] * dist;
}

run = input => {
  var instructions = input.split(', ');
  dir = [0, 1];
  pos = [0, 0];

  instructions.forEach(inst => {
    eval(inst[0] + '(' + inst.substring(1) + ')');
  });

  return Math.abs(pos[0]) + Math.abs(pos[1]);
}