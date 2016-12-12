var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

var line = 0;
var registers = { a: 0, b: 0, c: 1, d: 0 };
var a = 'a', b = 'b', c = 'c', d = 'd';

execute = instruction => {
  var parts = instruction.split(' ');
  var func = parts[0];
  var params = parts.slice(1);
  var call = `${func}(${params.join(',')})`;
  eval(call);
}

val = x => registers[x] === undefined ? x : registers[x];

cpy = (x, y) => {
  registers[y] = val(x);
  line++;
}

inc = x => {
  registers[x]++;
  line++;
}

dec = x => {
  registers[x]--;
  line++;
}

jnz = (x, y) => {
  if (val(x) !== 0) {
    line += y;
  } else {
    line++;
  }
}

run = input => {
  var instructions = input.split('\n');
  while (line < instructions.length) {
    execute(instructions[line]);
  }
  return registers[a];
}
