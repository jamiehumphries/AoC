var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

var instructions;
var line = 0;
var registers = { a: 12, b: 0, c: 0, d: 0 };
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
  if (registers[y] !== undefined) {
    registers[y] = val(x);
  }
  line++;
}

inc = x => {
  if (registers[x] !== undefined) {
    registers[x]++;
  }
  line++;
}

dec = x => {
  if (registers[x] !== undefined) {
    registers[x]--;
  }
  line++;
}

jnz = (x, y) => {
  if (isNaN(x) && !isNaN(y) && y < 0) {
    var original = JSON.parse(JSON.stringify(registers));
    var jnzLine = line;
    line += y;
    while (line < jnzLine) {
      execute(instructions[line]);
    }
    var loops = original[x] / (original[x] - registers[x]);
    Object.keys(original).forEach(k => {
      registers[k] = original[k] + (registers[k] - original[k]) * loops;
    });
    line++;
  } else if (val(x) !== 0) {
    line += val(y);
  } else {
    line++;
  }
}

tgl = a => {
  var tglLine = line + val(a);
  var tglInstruction = instructions[tglLine];
  if (tglInstruction !== undefined) {
    instructions[tglLine] = toggle(tglInstruction);
  }
  line++;
}

toggle = instruction => {
  var parts = instruction.split(' ');
  var func = parts[0];
  var params = parts.slice(1);
  if (params.length === 1) {
    parts[0] = func === 'inc' ? 'dec' : 'inc';
  } else if (params.length === 2) {
    parts[0] = func === 'jnz' ? 'cpy' : 'jnz';
  }
  return parts.join(' ');
}

run = input => {
  instructions = input.split('\n');
  while (line < instructions.length) {
    execute(instructions[line]);
  }
  return registers[a];
}
