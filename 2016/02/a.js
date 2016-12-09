var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

dirs = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] }

contain = num => Math.min(Math.max(num, 0), 2);

move = (from, dir) => {
  var fromXY = [(from - 1) % 3, Math.floor((from - 1) / 3)];
  var dirXY = dirs[dir];
  var toXY = [contain(fromXY[0] + dirXY[0]), contain(fromXY[1] + dirXY[1])];
  var to = toXY[1] * 3 + toXY[0] + 1;
  return to;
}

getCode = (from, inst) => {
  var num = from;
  inst.split('').forEach(dir => num = move(num, dir));
  return num;
}

run = input => {
  var instructions = input.split('\n');
  var code = '';
  var num = 5;
  instructions.forEach(inst => code += num = getCode(num, inst));
  return code;
}
