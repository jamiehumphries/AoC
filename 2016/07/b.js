var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

const SSL_PATTERN_1 = /(.)(.)\1[^\]]*(\[.*\][^\]]*)*\[[^\]]*\2\1\2.*\]/;
const SSL_PATTERN_2 = /\[[^\]]*(.)(.)\2.*\][^\[]*/

run = input => {

}
