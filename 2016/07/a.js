var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

const ABBA_PATTERN = /(.)((?!\1).)\2\1/;

run = input => {
  var ips = input.split('\n');
  ips = ips.map(ip => ip.split(/[\[\]]/)
    .reduce((parts, part, index) => {
      (index % 2 === 0 ? parts.outside : parts.inside).push(part);
      return parts;
    }, { outside: [], inside: [] }));

  var valid = ips.filter(ip => {
    return ip.outside.find(part => part.match(ABBA_PATTERN)) &&
      !ip.inside.find(part => part.match(ABBA_PATTERN));
  });

  return valid.length;
}
