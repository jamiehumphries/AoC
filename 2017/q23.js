const input = `set b 65
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1 ====== from 32
set d 2
set e 2 ====== from 24
set g d ====== from 20
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c 
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

const registers = {};
let position = 0;
let multiplies = 0;

function val(x) {
  const integer = parseInt(x);
  if (!isNaN(integer)) {
    return integer;
  }
  if (registers[x] === undefined) {
    registers[x] = 0;
  }
  return registers[x];
}

function set(x, y) {
  registers[x] = val(y);
  position++;
}

function sub(x, y) {
  registers[x] -= val(y);
  position++;
}

function mul(x, y) {
  registers[x] *= y;
  multiplies++;
  position++;
}

function jnz(x, y) {
  if (val(x) !== 0) {
    position += val(y);
  } else {
    position++;
  }
}

const lines = input.split('\n').map(line => {
  const parts = line.split(' ');
  return `${parts[0]}("${parts[1]}", "${parts[2] || ''}")`;
});


while (true) {
  const code = lines[position];
  if (code === undefined) {
    break;
  }
  eval(code);
}

multiplies;

const h = 0;

