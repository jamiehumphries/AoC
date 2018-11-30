const input = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 952
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

let position = 0;
let lastPlayedSound = null;
let stopped = false;

class Program {
  constructor(id) {
    this.registers = { p: id };
    this.position = 0;
    this.stopped = false
    this.queue = [];
    this.sends = 0;
  }

  val(x) {
    const integer = parseInt(x);
    if (!isNaN(integer)) {
      return integer;
    }
    if (this.registers[x] === undefined) {
      this.registers[x] = 0;
    }
    return this.registers[x];
  }

  snd(x) {
    this.partner.queue.unshift(this.val(x));
    this.position++;
    this.sends++;
  }

  set(x, y) {
    this.registers[x] = this.val(y);
    this.position++;
  }

  add(x, y) {
    this.registers[x] += this.val(y);
    this.position++;
  }

  mul(x, y) {
    this.registers[x] *= this.val(y);
    this.position++;
  }

  mod(x, y) {
    this.registers[x] %= this.val(y);
    this.position++;
  }

  rcv(x) {
    const queuedValue = this.queue.pop();
    if (queuedValue === undefined) {
      this.stopped = true;
    } else {
      this.registers[x] = queuedValue;
      this.position++;
    }
  }

  jgz(x, y) {
    if (this.val(x) > 0) {
      this.position += this.val(y);
    } else {
      this.position++;
    }
  }
}

const loc = input.split('\n').map(line => {
  const parts = line.split(' ');
  return `${parts[0]}("${parts[1]}", "${parts[2] || ''}")`;
});

const program0 = new Program(0);
const program1 = new Program(1);
program0.partner = program1;
program1.partner = program0;
while (!program0.stopped || !program1.stopped) {
  const loc0 = loc[program0.position];
  if (loc0) {
    eval('program0.' + loc[program0.position]);
  } else {
    program0.stopped = true;
  }
  const loc1 = loc[program1.position];
  if (loc1) {
    eval('program1.' + loc[program1.position]);
  } else {
    program1.stopped = true;
  }
}

const result1 = lastPlayedSound;
result1;

const result2 = program1.sends;
result2;
