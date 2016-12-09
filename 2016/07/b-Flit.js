var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

const SSL_CANDIDATE_PATTERN_1 = /(.)(.)\1.*\[[^\]]*\2\1\2.*\]/;
const SSL_CANDIDATE_PATTERN_2 = /\[[^\]]*(.)(.)\1.*\].*\2\1\2/;

run = input => {
  var ips = input.split('\n');
  var valid = ips.map(ip => ip.match(SSL_CANDIDATE_PATTERN_1) || ip.match(SSL_CANDIDATE_PATTERN_2))
    .filter(match => match)
    .map(match => match[0])
    .filter(match => match.match(/\[/g).length === match.match(/\]/g).length);
  return valid.length;
}
