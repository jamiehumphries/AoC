var fs = require('fs');
fs.readFile('input.bunny.js', 'utf8', (err, input) => console.log(run(input)));

const OUTPUT_PATTERN = /^(01)*0?$/

var a, b, c, d;
var line;
var output;
var initialA;

jump = n => line += n - 1; // -1 to account for automatic line increment
out = n => output += n.toString();

run = input => {
  var instructions = input.split('\n');
  initialA = 0;
  while (true) {
    a = initialA; b = 0; c = 0; d = 0;
    output = '';
    line = 0;
    while (output.match(OUTPUT_PATTERN)) {
      eval(instructions[line++]);
      if (output.length > 10) {
        return initialA;
      }
    }
    initialA++;
  }
}
