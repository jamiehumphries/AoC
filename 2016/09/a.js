var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var output = '';
  while (input.length > 0) {
    if (input[0] !== '(') {
      output += input[0];
      input = input.substring(1);
    } else {
      var marker = input.match(/\((\d+)x(\d+)\)/);
      var chars = parseInt(marker[1]);
      var repeat = parseInt(marker[2]);
      input = input.substring(marker[0].length);
      var repeatedPart = input.substring(0, chars);
      output += Array(repeat).fill(repeatedPart).join('');
      input = input.substring(chars);
    }
  }
  return output.length;
}
